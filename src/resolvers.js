const { forwardTo } = require('prisma-binding');
const { stores } = require('./mocks');

const resolvers = {
  Query: {
    async stores(_, args, { prisma, storeLoader }) {
      const stream = await prisma.stream(args.stream);
      return stream && stores.filter(store => store.stream === stream.name);
    },

    fragmentsConnection: forwardTo('db'),
    fragments: forwardTo('db'),
    fragment: forwardTo('db'),

    exclusionsConnection: forwardTo('db'),
    exclusions: forwardTo('db'),
    exclusion: forwardTo('db'),

    labelsConnection: forwardTo('db'),
    labels: forwardTo('db'),
    label: forwardTo('db'),

    schedulesConnection: forwardTo('db'),
    schedules: forwardTo('db'),
    schedule: forwardTo('db'),

    rulesConnection: forwardTo('db'),
    rules: forwardTo('db'),
    rule: forwardTo('db'),

    streamsConnection: forwardTo('db'),
    streams: forwardTo('db'),
    stream: forwardTo('db'),

    servicesConnection: forwardTo('db'),
    services: forwardTo('db'),
    service: forwardTo('db')
  },

  Store: {
    fragments(store, args, { db }, info) {
      return db.query.fragments({
        ...args,
        where: {
          storeName: store.name
        }
      }, info);
    },

    stream(store, _, { db }, info) {
      return db.query.stream({
        where: { name: store.stream }
      }, info);
    },

    exclusions(store, args, { db }, info) {
      return db.query.exclusions({
        ...args,
        where: {
          storeName: store.name
        }
      }, info);
    },


  }
};

module.exports = resolvers;
