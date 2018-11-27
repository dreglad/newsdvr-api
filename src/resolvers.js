const { forwardTo } = require('prisma-binding');
const maxBy = require('lodash/maxBy');
const parse = require('date-fns/parse');
const { stores } = require('./mocks');


const resolvers = {
  Query: {
    async stores(_, args, { prisma, storeLoader }) {
      const stream = await prisma.stream(args.stream);
      return stream && stores.filter(store => store.stream === stream.name);
    },

    async store(_, { where }, { prisma, storeLoader }) {
      const stream = await prisma.stream(where.stream);
      const streamStores = stores.filter(store => store.stream === stream.name)
      return where.name
        ? streamStores.find(store => store.name === where.name)
        : maxBy(streamStores, store => parse(store.end))
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
