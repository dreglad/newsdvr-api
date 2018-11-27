const { ApolloEngine } = require('apollo-engine');
const { GraphQLServer, PubSub } = require('graphql-yoga');
const binding = require('prisma-binding');
const { Prisma } = require('./generated/prisma-client');
const resolvers = require('./resolvers');

const port = parseInt(process.env.PORT, 10) || 4000;

const endpoint = process.env.PRISMA_ENDPOINT || 'http://127.0.0.1:4466';

const db = new binding.Prisma({
  typeDefs: 'src/generated/graphql-schema/prisma.graphql',
  endpoint
});

const prisma = new Prisma({ endpoint });

const pubsub = new PubSub();

const graphQLServer = new GraphQLServer({
  typeDefs: ['src/schema.graphql'],
  resolvers,
  context: async req => ({
    ...req,
    db,
    prisma,
    pubsub,
    service: await prisma.service({
      name: req.request.headers['x-service-name'] || process.env.DEFAULT_SERVICE_NAME
    })
  })
})

if (process.env.ENGINE_API_KEY) {
  // With Apollo Engine
  const httpServer = graphQLServer.createHttpServer({
    tracing: true,
    cacheControl: {
      defaultMaxAge: 60
    }
  });

  const engine = new ApolloEngine({
    apiKey: process.env.ENGINE_API_KEY,
    logging: {
      level: process.env.LOGGING_LEVEL || "INFO"
    },
    frontends: [{
      overrideGraphqlResponseHeaders: {
        'Access-Control-Allow-Origin': '*'
      }
    }],
    origins: [
      {
        supportsBatch: true,
        requestTimeout: "120s"
      }
    ]
  })

  engine.listen({
    port,
    httpServer,
    graphqlPaths: ['/']
  },
    () => {
      console.log(`Server with Apollo Engine is running on http://localhost:${process.env.PORT}`)
    }
  )
} else {
  // Without Apollo Engine
  graphQLServer.start({ port }, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
  })
}
