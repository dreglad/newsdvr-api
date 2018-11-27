"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Exclusion",
    embedded: false
  },
  {
    name: "FREQ",
    embedded: false
  },
  {
    name: "Fragment",
    embedded: false
  },
  {
    name: "Label",
    embedded: false
  },
  {
    name: "Rule",
    embedded: false
  },
  {
    name: "Schedule",
    embedded: false
  },
  {
    name: "Service",
    embedded: false
  },
  {
    name: "Stream",
    embedded: false
  },
  {
    name: "Weekday",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
