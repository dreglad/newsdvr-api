module.exports = {
        typeDefs: /* GraphQL */ `type AggregateExclusion {
  count: Int!
}

type AggregateFragment {
  count: Int!
}

type AggregateLabel {
  count: Int!
}

type AggregateRule {
  count: Int!
}

type AggregateSchedule {
  count: Int!
}

type AggregateService {
  count: Int!
}

type AggregateStore {
  count: Int!
}

type AggregateStream {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Exclusion {
  id: ID!
  start: DateTime!
  offset: Int!
  duration: Int!
  store(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store!]
}

type ExclusionConnection {
  pageInfo: PageInfo!
  edges: [ExclusionEdge]!
  aggregate: AggregateExclusion!
}

input ExclusionCreateInput {
  start: DateTime!
  offset: Int
  duration: Int!
  store: StoreCreateManyWithoutExclusionsInput
}

input ExclusionCreateManyWithoutStoreInput {
  create: [ExclusionCreateWithoutStoreInput!]
  connect: [ExclusionWhereUniqueInput!]
}

input ExclusionCreateWithoutStoreInput {
  start: DateTime!
  offset: Int
  duration: Int!
}

type ExclusionEdge {
  node: Exclusion!
  cursor: String!
}

enum ExclusionOrderByInput {
  id_ASC
  id_DESC
  start_ASC
  start_DESC
  offset_ASC
  offset_DESC
  duration_ASC
  duration_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExclusionPreviousValues {
  id: ID!
  start: DateTime!
  offset: Int!
  duration: Int!
}

type ExclusionSubscriptionPayload {
  mutation: MutationType!
  node: Exclusion
  updatedFields: [String!]
  previousValues: ExclusionPreviousValues
}

input ExclusionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExclusionWhereInput
  AND: [ExclusionSubscriptionWhereInput!]
  OR: [ExclusionSubscriptionWhereInput!]
  NOT: [ExclusionSubscriptionWhereInput!]
}

input ExclusionUpdateInput {
  start: DateTime
  offset: Int
  duration: Int
  store: StoreUpdateManyWithoutExclusionsInput
}

input ExclusionUpdateManyMutationInput {
  start: DateTime
  offset: Int
  duration: Int
}

input ExclusionUpdateManyWithoutStoreInput {
  create: [ExclusionCreateWithoutStoreInput!]
  delete: [ExclusionWhereUniqueInput!]
  connect: [ExclusionWhereUniqueInput!]
  disconnect: [ExclusionWhereUniqueInput!]
  update: [ExclusionUpdateWithWhereUniqueWithoutStoreInput!]
  upsert: [ExclusionUpsertWithWhereUniqueWithoutStoreInput!]
}

input ExclusionUpdateWithoutStoreDataInput {
  start: DateTime
  offset: Int
  duration: Int
}

input ExclusionUpdateWithWhereUniqueWithoutStoreInput {
  where: ExclusionWhereUniqueInput!
  data: ExclusionUpdateWithoutStoreDataInput!
}

input ExclusionUpsertWithWhereUniqueWithoutStoreInput {
  where: ExclusionWhereUniqueInput!
  update: ExclusionUpdateWithoutStoreDataInput!
  create: ExclusionCreateWithoutStoreInput!
}

input ExclusionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  offset: Int
  offset_not: Int
  offset_in: [Int!]
  offset_not_in: [Int!]
  offset_lt: Int
  offset_lte: Int
  offset_gt: Int
  offset_gte: Int
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  store_every: StoreWhereInput
  store_some: StoreWhereInput
  store_none: StoreWhereInput
  AND: [ExclusionWhereInput!]
  OR: [ExclusionWhereInput!]
  NOT: [ExclusionWhereInput!]
}

input ExclusionWhereUniqueInput {
  id: ID
}

type Fragment {
  id: ID!
  start: DateTime!
  offset: Int!
  duration: Int!
  metadata: Json
  store(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store!]
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
}

type FragmentConnection {
  pageInfo: PageInfo!
  edges: [FragmentEdge]!
  aggregate: AggregateFragment!
}

input FragmentCreateInput {
  start: DateTime!
  offset: Int
  duration: Int!
  metadata: Json
  store: StoreCreateManyWithoutFragmentsInput
  labels: LabelCreateManyWithoutFragmentsInput
}

input FragmentCreateManyWithoutLabelsInput {
  create: [FragmentCreateWithoutLabelsInput!]
  connect: [FragmentWhereUniqueInput!]
}

input FragmentCreateManyWithoutStoreInput {
  create: [FragmentCreateWithoutStoreInput!]
  connect: [FragmentWhereUniqueInput!]
}

input FragmentCreateWithoutLabelsInput {
  start: DateTime!
  offset: Int
  duration: Int!
  metadata: Json
  store: StoreCreateManyWithoutFragmentsInput
}

input FragmentCreateWithoutStoreInput {
  start: DateTime!
  offset: Int
  duration: Int!
  metadata: Json
  labels: LabelCreateManyWithoutFragmentsInput
}

type FragmentEdge {
  node: Fragment!
  cursor: String!
}

enum FragmentOrderByInput {
  id_ASC
  id_DESC
  start_ASC
  start_DESC
  offset_ASC
  offset_DESC
  duration_ASC
  duration_DESC
  metadata_ASC
  metadata_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FragmentPreviousValues {
  id: ID!
  start: DateTime!
  offset: Int!
  duration: Int!
  metadata: Json
}

type FragmentSubscriptionPayload {
  mutation: MutationType!
  node: Fragment
  updatedFields: [String!]
  previousValues: FragmentPreviousValues
}

input FragmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FragmentWhereInput
  AND: [FragmentSubscriptionWhereInput!]
  OR: [FragmentSubscriptionWhereInput!]
  NOT: [FragmentSubscriptionWhereInput!]
}

input FragmentUpdateInput {
  start: DateTime
  offset: Int
  duration: Int
  metadata: Json
  store: StoreUpdateManyWithoutFragmentsInput
  labels: LabelUpdateManyWithoutFragmentsInput
}

input FragmentUpdateManyMutationInput {
  start: DateTime
  offset: Int
  duration: Int
  metadata: Json
}

input FragmentUpdateManyWithoutLabelsInput {
  create: [FragmentCreateWithoutLabelsInput!]
  delete: [FragmentWhereUniqueInput!]
  connect: [FragmentWhereUniqueInput!]
  disconnect: [FragmentWhereUniqueInput!]
  update: [FragmentUpdateWithWhereUniqueWithoutLabelsInput!]
  upsert: [FragmentUpsertWithWhereUniqueWithoutLabelsInput!]
}

input FragmentUpdateManyWithoutStoreInput {
  create: [FragmentCreateWithoutStoreInput!]
  delete: [FragmentWhereUniqueInput!]
  connect: [FragmentWhereUniqueInput!]
  disconnect: [FragmentWhereUniqueInput!]
  update: [FragmentUpdateWithWhereUniqueWithoutStoreInput!]
  upsert: [FragmentUpsertWithWhereUniqueWithoutStoreInput!]
}

input FragmentUpdateWithoutLabelsDataInput {
  start: DateTime
  offset: Int
  duration: Int
  metadata: Json
  store: StoreUpdateManyWithoutFragmentsInput
}

input FragmentUpdateWithoutStoreDataInput {
  start: DateTime
  offset: Int
  duration: Int
  metadata: Json
  labels: LabelUpdateManyWithoutFragmentsInput
}

input FragmentUpdateWithWhereUniqueWithoutLabelsInput {
  where: FragmentWhereUniqueInput!
  data: FragmentUpdateWithoutLabelsDataInput!
}

input FragmentUpdateWithWhereUniqueWithoutStoreInput {
  where: FragmentWhereUniqueInput!
  data: FragmentUpdateWithoutStoreDataInput!
}

input FragmentUpsertWithWhereUniqueWithoutLabelsInput {
  where: FragmentWhereUniqueInput!
  update: FragmentUpdateWithoutLabelsDataInput!
  create: FragmentCreateWithoutLabelsInput!
}

input FragmentUpsertWithWhereUniqueWithoutStoreInput {
  where: FragmentWhereUniqueInput!
  update: FragmentUpdateWithoutStoreDataInput!
  create: FragmentCreateWithoutStoreInput!
}

input FragmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  offset: Int
  offset_not: Int
  offset_in: [Int!]
  offset_not_in: [Int!]
  offset_lt: Int
  offset_lte: Int
  offset_gt: Int
  offset_gte: Int
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  store_every: StoreWhereInput
  store_some: StoreWhereInput
  store_none: StoreWhereInput
  labels_every: LabelWhereInput
  labels_some: LabelWhereInput
  labels_none: LabelWhereInput
  AND: [FragmentWhereInput!]
  OR: [FragmentWhereInput!]
  NOT: [FragmentWhereInput!]
}

input FragmentWhereUniqueInput {
  id: ID
}

enum FREQ {
  MINUTELY
  SECONDLY
  DAILY
}

scalar Json

type Label {
  id: ID!
  slug: String!
  name: String!
  value: String!
  fragments(where: FragmentWhereInput, orderBy: FragmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fragment!]
  schedules(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Schedule!]
}

type LabelConnection {
  pageInfo: PageInfo!
  edges: [LabelEdge]!
  aggregate: AggregateLabel!
}

input LabelCreateInput {
  slug: String!
  name: String!
  value: String!
  fragments: FragmentCreateManyWithoutLabelsInput
  schedules: ScheduleCreateManyWithoutDefaultLabelsInput
}

input LabelCreateManyInput {
  create: [LabelCreateInput!]
  connect: [LabelWhereUniqueInput!]
}

input LabelCreateManyWithoutFragmentsInput {
  create: [LabelCreateWithoutFragmentsInput!]
  connect: [LabelWhereUniqueInput!]
}

input LabelCreateManyWithoutSchedulesInput {
  create: [LabelCreateWithoutSchedulesInput!]
  connect: [LabelWhereUniqueInput!]
}

input LabelCreateWithoutFragmentsInput {
  slug: String!
  name: String!
  value: String!
  schedules: ScheduleCreateManyWithoutDefaultLabelsInput
}

input LabelCreateWithoutSchedulesInput {
  slug: String!
  name: String!
  value: String!
  fragments: FragmentCreateManyWithoutLabelsInput
}

type LabelEdge {
  node: Label!
  cursor: String!
}

enum LabelOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  name_ASC
  name_DESC
  value_ASC
  value_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LabelPreviousValues {
  id: ID!
  slug: String!
  name: String!
  value: String!
}

type LabelSubscriptionPayload {
  mutation: MutationType!
  node: Label
  updatedFields: [String!]
  previousValues: LabelPreviousValues
}

input LabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LabelWhereInput
  AND: [LabelSubscriptionWhereInput!]
  OR: [LabelSubscriptionWhereInput!]
  NOT: [LabelSubscriptionWhereInput!]
}

input LabelUpdateDataInput {
  slug: String
  name: String
  value: String
  fragments: FragmentUpdateManyWithoutLabelsInput
  schedules: ScheduleUpdateManyWithoutDefaultLabelsInput
}

input LabelUpdateInput {
  slug: String
  name: String
  value: String
  fragments: FragmentUpdateManyWithoutLabelsInput
  schedules: ScheduleUpdateManyWithoutDefaultLabelsInput
}

input LabelUpdateManyInput {
  create: [LabelCreateInput!]
  update: [LabelUpdateWithWhereUniqueNestedInput!]
  upsert: [LabelUpsertWithWhereUniqueNestedInput!]
  delete: [LabelWhereUniqueInput!]
  connect: [LabelWhereUniqueInput!]
  disconnect: [LabelWhereUniqueInput!]
}

input LabelUpdateManyMutationInput {
  slug: String
  name: String
  value: String
}

input LabelUpdateManyWithoutFragmentsInput {
  create: [LabelCreateWithoutFragmentsInput!]
  delete: [LabelWhereUniqueInput!]
  connect: [LabelWhereUniqueInput!]
  disconnect: [LabelWhereUniqueInput!]
  update: [LabelUpdateWithWhereUniqueWithoutFragmentsInput!]
  upsert: [LabelUpsertWithWhereUniqueWithoutFragmentsInput!]
}

input LabelUpdateManyWithoutSchedulesInput {
  create: [LabelCreateWithoutSchedulesInput!]
  delete: [LabelWhereUniqueInput!]
  connect: [LabelWhereUniqueInput!]
  disconnect: [LabelWhereUniqueInput!]
  update: [LabelUpdateWithWhereUniqueWithoutSchedulesInput!]
  upsert: [LabelUpsertWithWhereUniqueWithoutSchedulesInput!]
}

input LabelUpdateWithoutFragmentsDataInput {
  slug: String
  name: String
  value: String
  schedules: ScheduleUpdateManyWithoutDefaultLabelsInput
}

input LabelUpdateWithoutSchedulesDataInput {
  slug: String
  name: String
  value: String
  fragments: FragmentUpdateManyWithoutLabelsInput
}

input LabelUpdateWithWhereUniqueNestedInput {
  where: LabelWhereUniqueInput!
  data: LabelUpdateDataInput!
}

input LabelUpdateWithWhereUniqueWithoutFragmentsInput {
  where: LabelWhereUniqueInput!
  data: LabelUpdateWithoutFragmentsDataInput!
}

input LabelUpdateWithWhereUniqueWithoutSchedulesInput {
  where: LabelWhereUniqueInput!
  data: LabelUpdateWithoutSchedulesDataInput!
}

input LabelUpsertWithWhereUniqueNestedInput {
  where: LabelWhereUniqueInput!
  update: LabelUpdateDataInput!
  create: LabelCreateInput!
}

input LabelUpsertWithWhereUniqueWithoutFragmentsInput {
  where: LabelWhereUniqueInput!
  update: LabelUpdateWithoutFragmentsDataInput!
  create: LabelCreateWithoutFragmentsInput!
}

input LabelUpsertWithWhereUniqueWithoutSchedulesInput {
  where: LabelWhereUniqueInput!
  update: LabelUpdateWithoutSchedulesDataInput!
  create: LabelCreateWithoutSchedulesInput!
}

input LabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  fragments_every: FragmentWhereInput
  fragments_some: FragmentWhereInput
  fragments_none: FragmentWhereInput
  schedules_every: ScheduleWhereInput
  schedules_some: ScheduleWhereInput
  schedules_none: ScheduleWhereInput
  AND: [LabelWhereInput!]
  OR: [LabelWhereInput!]
  NOT: [LabelWhereInput!]
}

input LabelWhereUniqueInput {
  id: ID
  slug: String
}

scalar Long

type Mutation {
  createExclusion(data: ExclusionCreateInput!): Exclusion!
  updateExclusion(data: ExclusionUpdateInput!, where: ExclusionWhereUniqueInput!): Exclusion
  updateManyExclusions(data: ExclusionUpdateManyMutationInput!, where: ExclusionWhereInput): BatchPayload!
  upsertExclusion(where: ExclusionWhereUniqueInput!, create: ExclusionCreateInput!, update: ExclusionUpdateInput!): Exclusion!
  deleteExclusion(where: ExclusionWhereUniqueInput!): Exclusion
  deleteManyExclusions(where: ExclusionWhereInput): BatchPayload!
  createFragment(data: FragmentCreateInput!): Fragment!
  updateFragment(data: FragmentUpdateInput!, where: FragmentWhereUniqueInput!): Fragment
  updateManyFragments(data: FragmentUpdateManyMutationInput!, where: FragmentWhereInput): BatchPayload!
  upsertFragment(where: FragmentWhereUniqueInput!, create: FragmentCreateInput!, update: FragmentUpdateInput!): Fragment!
  deleteFragment(where: FragmentWhereUniqueInput!): Fragment
  deleteManyFragments(where: FragmentWhereInput): BatchPayload!
  createLabel(data: LabelCreateInput!): Label!
  updateLabel(data: LabelUpdateInput!, where: LabelWhereUniqueInput!): Label
  updateManyLabels(data: LabelUpdateManyMutationInput!, where: LabelWhereInput): BatchPayload!
  upsertLabel(where: LabelWhereUniqueInput!, create: LabelCreateInput!, update: LabelUpdateInput!): Label!
  deleteLabel(where: LabelWhereUniqueInput!): Label
  deleteManyLabels(where: LabelWhereInput): BatchPayload!
  createRule(data: RuleCreateInput!): Rule!
  updateRule(data: RuleUpdateInput!, where: RuleWhereUniqueInput!): Rule
  updateManyRules(data: RuleUpdateManyMutationInput!, where: RuleWhereInput): BatchPayload!
  upsertRule(where: RuleWhereUniqueInput!, create: RuleCreateInput!, update: RuleUpdateInput!): Rule!
  deleteRule(where: RuleWhereUniqueInput!): Rule
  deleteManyRules(where: RuleWhereInput): BatchPayload!
  createSchedule(data: ScheduleCreateInput!): Schedule!
  updateSchedule(data: ScheduleUpdateInput!, where: ScheduleWhereUniqueInput!): Schedule
  updateManySchedules(data: ScheduleUpdateManyMutationInput!, where: ScheduleWhereInput): BatchPayload!
  upsertSchedule(where: ScheduleWhereUniqueInput!, create: ScheduleCreateInput!, update: ScheduleUpdateInput!): Schedule!
  deleteSchedule(where: ScheduleWhereUniqueInput!): Schedule
  deleteManySchedules(where: ScheduleWhereInput): BatchPayload!
  createService(data: ServiceCreateInput!): Service!
  updateService(data: ServiceUpdateInput!, where: ServiceWhereUniqueInput!): Service
  updateManyServices(data: ServiceUpdateManyMutationInput!, where: ServiceWhereInput): BatchPayload!
  upsertService(where: ServiceWhereUniqueInput!, create: ServiceCreateInput!, update: ServiceUpdateInput!): Service!
  deleteService(where: ServiceWhereUniqueInput!): Service
  deleteManyServices(where: ServiceWhereInput): BatchPayload!
  createStore(data: StoreCreateInput!): Store!
  updateStore(data: StoreUpdateInput!, where: StoreWhereUniqueInput!): Store
  updateManyStores(data: StoreUpdateManyMutationInput!, where: StoreWhereInput): BatchPayload!
  upsertStore(where: StoreWhereUniqueInput!, create: StoreCreateInput!, update: StoreUpdateInput!): Store!
  deleteStore(where: StoreWhereUniqueInput!): Store
  deleteManyStores(where: StoreWhereInput): BatchPayload!
  createStream(data: StreamCreateInput!): Stream!
  updateStream(data: StreamUpdateInput!, where: StreamWhereUniqueInput!): Stream
  updateManyStreams(data: StreamUpdateManyMutationInput!, where: StreamWhereInput): BatchPayload!
  upsertStream(where: StreamWhereUniqueInput!, create: StreamCreateInput!, update: StreamUpdateInput!): Stream!
  deleteStream(where: StreamWhereUniqueInput!): Stream
  deleteManyStreams(where: StreamWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  exclusion(where: ExclusionWhereUniqueInput!): Exclusion
  exclusions(where: ExclusionWhereInput, orderBy: ExclusionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exclusion]!
  exclusionsConnection(where: ExclusionWhereInput, orderBy: ExclusionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExclusionConnection!
  fragment(where: FragmentWhereUniqueInput!): Fragment
  fragments(where: FragmentWhereInput, orderBy: FragmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fragment]!
  fragmentsConnection(where: FragmentWhereInput, orderBy: FragmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FragmentConnection!
  label(where: LabelWhereUniqueInput!): Label
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label]!
  labelsConnection(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LabelConnection!
  rule(where: RuleWhereUniqueInput!): Rule
  rules(where: RuleWhereInput, orderBy: RuleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rule]!
  rulesConnection(where: RuleWhereInput, orderBy: RuleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RuleConnection!
  schedule(where: ScheduleWhereUniqueInput!): Schedule
  schedules(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Schedule]!
  schedulesConnection(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScheduleConnection!
  service(where: ServiceWhereUniqueInput!): Service
  services(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service]!
  servicesConnection(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceConnection!
  store(where: StoreWhereUniqueInput!): Store
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store]!
  storesConnection(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoreConnection!
  stream(where: StreamWhereUniqueInput!): Stream
  streams(where: StreamWhereInput, orderBy: StreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stream]!
  streamsConnection(where: StreamWhereInput, orderBy: StreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StreamConnection!
  node(id: ID!): Node
}

type Rule {
  id: ID!
  name: String
  metadata: Json
  start: DateTime
  end: DateTime
  includedAnd(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
  includedOr(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
  excludedAnd(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
  excludedOr(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
}

type RuleConnection {
  pageInfo: PageInfo!
  edges: [RuleEdge]!
  aggregate: AggregateRule!
}

input RuleCreateInput {
  name: String
  metadata: Json
  start: DateTime
  end: DateTime
  includedAnd: LabelCreateManyInput
  includedOr: LabelCreateManyInput
  excludedAnd: LabelCreateManyInput
  excludedOr: LabelCreateManyInput
}

type RuleEdge {
  node: Rule!
  cursor: String!
}

enum RuleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  metadata_ASC
  metadata_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RulePreviousValues {
  id: ID!
  name: String
  metadata: Json
  start: DateTime
  end: DateTime
}

type RuleSubscriptionPayload {
  mutation: MutationType!
  node: Rule
  updatedFields: [String!]
  previousValues: RulePreviousValues
}

input RuleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RuleWhereInput
  AND: [RuleSubscriptionWhereInput!]
  OR: [RuleSubscriptionWhereInput!]
  NOT: [RuleSubscriptionWhereInput!]
}

input RuleUpdateInput {
  name: String
  metadata: Json
  start: DateTime
  end: DateTime
  includedAnd: LabelUpdateManyInput
  includedOr: LabelUpdateManyInput
  excludedAnd: LabelUpdateManyInput
  excludedOr: LabelUpdateManyInput
}

input RuleUpdateManyMutationInput {
  name: String
  metadata: Json
  start: DateTime
  end: DateTime
}

input RuleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  includedAnd_every: LabelWhereInput
  includedAnd_some: LabelWhereInput
  includedAnd_none: LabelWhereInput
  includedOr_every: LabelWhereInput
  includedOr_some: LabelWhereInput
  includedOr_none: LabelWhereInput
  excludedAnd_every: LabelWhereInput
  excludedAnd_some: LabelWhereInput
  excludedAnd_none: LabelWhereInput
  excludedOr_every: LabelWhereInput
  excludedOr_some: LabelWhereInput
  excludedOr_none: LabelWhereInput
  AND: [RuleWhereInput!]
  OR: [RuleWhereInput!]
  NOT: [RuleWhereInput!]
}

input RuleWhereUniqueInput {
  id: ID
}

type Schedule {
  id: ID!
  freq: FREQ!
  duration: Int!
  count: Int
  startTimes: [String!]!
  byWeekday: [Weekday!]!
  defaultLabels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
  stream: Stream!
}

type ScheduleConnection {
  pageInfo: PageInfo!
  edges: [ScheduleEdge]!
  aggregate: AggregateSchedule!
}

input ScheduleCreatebyWeekdayInput {
  set: [Weekday!]
}

input ScheduleCreateInput {
  freq: FREQ
  duration: Int!
  count: Int
  startTimes: ScheduleCreatestartTimesInput
  byWeekday: ScheduleCreatebyWeekdayInput
  defaultLabels: LabelCreateManyWithoutSchedulesInput
  stream: StreamCreateOneWithoutSchedulesInput!
}

input ScheduleCreateManyWithoutDefaultLabelsInput {
  create: [ScheduleCreateWithoutDefaultLabelsInput!]
  connect: [ScheduleWhereUniqueInput!]
}

input ScheduleCreateManyWithoutStreamInput {
  create: [ScheduleCreateWithoutStreamInput!]
  connect: [ScheduleWhereUniqueInput!]
}

input ScheduleCreatestartTimesInput {
  set: [String!]
}

input ScheduleCreateWithoutDefaultLabelsInput {
  freq: FREQ
  duration: Int!
  count: Int
  startTimes: ScheduleCreatestartTimesInput
  byWeekday: ScheduleCreatebyWeekdayInput
  stream: StreamCreateOneWithoutSchedulesInput!
}

input ScheduleCreateWithoutStreamInput {
  freq: FREQ
  duration: Int!
  count: Int
  startTimes: ScheduleCreatestartTimesInput
  byWeekday: ScheduleCreatebyWeekdayInput
  defaultLabels: LabelCreateManyWithoutSchedulesInput
}

type ScheduleEdge {
  node: Schedule!
  cursor: String!
}

enum ScheduleOrderByInput {
  id_ASC
  id_DESC
  freq_ASC
  freq_DESC
  duration_ASC
  duration_DESC
  count_ASC
  count_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchedulePreviousValues {
  id: ID!
  freq: FREQ!
  duration: Int!
  count: Int
  startTimes: [String!]!
  byWeekday: [Weekday!]!
}

type ScheduleSubscriptionPayload {
  mutation: MutationType!
  node: Schedule
  updatedFields: [String!]
  previousValues: SchedulePreviousValues
}

input ScheduleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScheduleWhereInput
  AND: [ScheduleSubscriptionWhereInput!]
  OR: [ScheduleSubscriptionWhereInput!]
  NOT: [ScheduleSubscriptionWhereInput!]
}

input ScheduleUpdatebyWeekdayInput {
  set: [Weekday!]
}

input ScheduleUpdateInput {
  freq: FREQ
  duration: Int
  count: Int
  startTimes: ScheduleUpdatestartTimesInput
  byWeekday: ScheduleUpdatebyWeekdayInput
  defaultLabels: LabelUpdateManyWithoutSchedulesInput
  stream: StreamUpdateOneRequiredWithoutSchedulesInput
}

input ScheduleUpdateManyMutationInput {
  freq: FREQ
  duration: Int
  count: Int
  startTimes: ScheduleUpdatestartTimesInput
  byWeekday: ScheduleUpdatebyWeekdayInput
}

input ScheduleUpdateManyWithoutDefaultLabelsInput {
  create: [ScheduleCreateWithoutDefaultLabelsInput!]
  delete: [ScheduleWhereUniqueInput!]
  connect: [ScheduleWhereUniqueInput!]
  disconnect: [ScheduleWhereUniqueInput!]
  update: [ScheduleUpdateWithWhereUniqueWithoutDefaultLabelsInput!]
  upsert: [ScheduleUpsertWithWhereUniqueWithoutDefaultLabelsInput!]
}

input ScheduleUpdateManyWithoutStreamInput {
  create: [ScheduleCreateWithoutStreamInput!]
  delete: [ScheduleWhereUniqueInput!]
  connect: [ScheduleWhereUniqueInput!]
  disconnect: [ScheduleWhereUniqueInput!]
  update: [ScheduleUpdateWithWhereUniqueWithoutStreamInput!]
  upsert: [ScheduleUpsertWithWhereUniqueWithoutStreamInput!]
}

input ScheduleUpdatestartTimesInput {
  set: [String!]
}

input ScheduleUpdateWithoutDefaultLabelsDataInput {
  freq: FREQ
  duration: Int
  count: Int
  startTimes: ScheduleUpdatestartTimesInput
  byWeekday: ScheduleUpdatebyWeekdayInput
  stream: StreamUpdateOneRequiredWithoutSchedulesInput
}

input ScheduleUpdateWithoutStreamDataInput {
  freq: FREQ
  duration: Int
  count: Int
  startTimes: ScheduleUpdatestartTimesInput
  byWeekday: ScheduleUpdatebyWeekdayInput
  defaultLabels: LabelUpdateManyWithoutSchedulesInput
}

input ScheduleUpdateWithWhereUniqueWithoutDefaultLabelsInput {
  where: ScheduleWhereUniqueInput!
  data: ScheduleUpdateWithoutDefaultLabelsDataInput!
}

input ScheduleUpdateWithWhereUniqueWithoutStreamInput {
  where: ScheduleWhereUniqueInput!
  data: ScheduleUpdateWithoutStreamDataInput!
}

input ScheduleUpsertWithWhereUniqueWithoutDefaultLabelsInput {
  where: ScheduleWhereUniqueInput!
  update: ScheduleUpdateWithoutDefaultLabelsDataInput!
  create: ScheduleCreateWithoutDefaultLabelsInput!
}

input ScheduleUpsertWithWhereUniqueWithoutStreamInput {
  where: ScheduleWhereUniqueInput!
  update: ScheduleUpdateWithoutStreamDataInput!
  create: ScheduleCreateWithoutStreamInput!
}

input ScheduleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  freq: FREQ
  freq_not: FREQ
  freq_in: [FREQ!]
  freq_not_in: [FREQ!]
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  defaultLabels_every: LabelWhereInput
  defaultLabels_some: LabelWhereInput
  defaultLabels_none: LabelWhereInput
  stream: StreamWhereInput
  AND: [ScheduleWhereInput!]
  OR: [ScheduleWhereInput!]
  NOT: [ScheduleWhereInput!]
}

input ScheduleWhereUniqueInput {
  id: ID
}

type Service {
  id: ID!
  name: String!
  streams(where: StreamWhereInput, orderBy: StreamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stream!]
}

type ServiceConnection {
  pageInfo: PageInfo!
  edges: [ServiceEdge]!
  aggregate: AggregateService!
}

input ServiceCreateInput {
  name: String!
  streams: StreamCreateManyInput
}

type ServiceEdge {
  node: Service!
  cursor: String!
}

enum ServiceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ServicePreviousValues {
  id: ID!
  name: String!
}

type ServiceSubscriptionPayload {
  mutation: MutationType!
  node: Service
  updatedFields: [String!]
  previousValues: ServicePreviousValues
}

input ServiceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServiceWhereInput
  AND: [ServiceSubscriptionWhereInput!]
  OR: [ServiceSubscriptionWhereInput!]
  NOT: [ServiceSubscriptionWhereInput!]
}

input ServiceUpdateInput {
  name: String
  streams: StreamUpdateManyInput
}

input ServiceUpdateManyMutationInput {
  name: String
}

input ServiceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  streams_every: StreamWhereInput
  streams_some: StreamWhereInput
  streams_none: StreamWhereInput
  AND: [ServiceWhereInput!]
  OR: [ServiceWhereInput!]
  NOT: [ServiceWhereInput!]
}

input ServiceWhereUniqueInput {
  id: ID
  name: String
}

type Store {
  id: ID!
  start: DateTime
  end: DateTime
  stream: Stream!
  fragments(where: FragmentWhereInput, orderBy: FragmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Fragment!]
  exclusions(where: ExclusionWhereInput, orderBy: ExclusionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exclusion!]
}

type StoreConnection {
  pageInfo: PageInfo!
  edges: [StoreEdge]!
  aggregate: AggregateStore!
}

input StoreCreateInput {
  start: DateTime
  end: DateTime
  stream: StreamCreateOneWithoutStoresInput!
  fragments: FragmentCreateManyWithoutStoreInput
  exclusions: ExclusionCreateManyWithoutStoreInput
}

input StoreCreateManyWithoutExclusionsInput {
  create: [StoreCreateWithoutExclusionsInput!]
  connect: [StoreWhereUniqueInput!]
}

input StoreCreateManyWithoutFragmentsInput {
  create: [StoreCreateWithoutFragmentsInput!]
  connect: [StoreWhereUniqueInput!]
}

input StoreCreateManyWithoutStreamInput {
  create: [StoreCreateWithoutStreamInput!]
  connect: [StoreWhereUniqueInput!]
}

input StoreCreateWithoutExclusionsInput {
  start: DateTime
  end: DateTime
  stream: StreamCreateOneWithoutStoresInput!
  fragments: FragmentCreateManyWithoutStoreInput
}

input StoreCreateWithoutFragmentsInput {
  start: DateTime
  end: DateTime
  stream: StreamCreateOneWithoutStoresInput!
  exclusions: ExclusionCreateManyWithoutStoreInput
}

input StoreCreateWithoutStreamInput {
  start: DateTime
  end: DateTime
  fragments: FragmentCreateManyWithoutStoreInput
  exclusions: ExclusionCreateManyWithoutStoreInput
}

type StoreEdge {
  node: Store!
  cursor: String!
}

enum StoreOrderByInput {
  id_ASC
  id_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StorePreviousValues {
  id: ID!
  start: DateTime
  end: DateTime
}

type StoreSubscriptionPayload {
  mutation: MutationType!
  node: Store
  updatedFields: [String!]
  previousValues: StorePreviousValues
}

input StoreSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoreWhereInput
  AND: [StoreSubscriptionWhereInput!]
  OR: [StoreSubscriptionWhereInput!]
  NOT: [StoreSubscriptionWhereInput!]
}

input StoreUpdateInput {
  start: DateTime
  end: DateTime
  stream: StreamUpdateOneRequiredWithoutStoresInput
  fragments: FragmentUpdateManyWithoutStoreInput
  exclusions: ExclusionUpdateManyWithoutStoreInput
}

input StoreUpdateManyMutationInput {
  start: DateTime
  end: DateTime
}

input StoreUpdateManyWithoutExclusionsInput {
  create: [StoreCreateWithoutExclusionsInput!]
  delete: [StoreWhereUniqueInput!]
  connect: [StoreWhereUniqueInput!]
  disconnect: [StoreWhereUniqueInput!]
  update: [StoreUpdateWithWhereUniqueWithoutExclusionsInput!]
  upsert: [StoreUpsertWithWhereUniqueWithoutExclusionsInput!]
}

input StoreUpdateManyWithoutFragmentsInput {
  create: [StoreCreateWithoutFragmentsInput!]
  delete: [StoreWhereUniqueInput!]
  connect: [StoreWhereUniqueInput!]
  disconnect: [StoreWhereUniqueInput!]
  update: [StoreUpdateWithWhereUniqueWithoutFragmentsInput!]
  upsert: [StoreUpsertWithWhereUniqueWithoutFragmentsInput!]
}

input StoreUpdateManyWithoutStreamInput {
  create: [StoreCreateWithoutStreamInput!]
  delete: [StoreWhereUniqueInput!]
  connect: [StoreWhereUniqueInput!]
  disconnect: [StoreWhereUniqueInput!]
  update: [StoreUpdateWithWhereUniqueWithoutStreamInput!]
  upsert: [StoreUpsertWithWhereUniqueWithoutStreamInput!]
}

input StoreUpdateWithoutExclusionsDataInput {
  start: DateTime
  end: DateTime
  stream: StreamUpdateOneRequiredWithoutStoresInput
  fragments: FragmentUpdateManyWithoutStoreInput
}

input StoreUpdateWithoutFragmentsDataInput {
  start: DateTime
  end: DateTime
  stream: StreamUpdateOneRequiredWithoutStoresInput
  exclusions: ExclusionUpdateManyWithoutStoreInput
}

input StoreUpdateWithoutStreamDataInput {
  start: DateTime
  end: DateTime
  fragments: FragmentUpdateManyWithoutStoreInput
  exclusions: ExclusionUpdateManyWithoutStoreInput
}

input StoreUpdateWithWhereUniqueWithoutExclusionsInput {
  where: StoreWhereUniqueInput!
  data: StoreUpdateWithoutExclusionsDataInput!
}

input StoreUpdateWithWhereUniqueWithoutFragmentsInput {
  where: StoreWhereUniqueInput!
  data: StoreUpdateWithoutFragmentsDataInput!
}

input StoreUpdateWithWhereUniqueWithoutStreamInput {
  where: StoreWhereUniqueInput!
  data: StoreUpdateWithoutStreamDataInput!
}

input StoreUpsertWithWhereUniqueWithoutExclusionsInput {
  where: StoreWhereUniqueInput!
  update: StoreUpdateWithoutExclusionsDataInput!
  create: StoreCreateWithoutExclusionsInput!
}

input StoreUpsertWithWhereUniqueWithoutFragmentsInput {
  where: StoreWhereUniqueInput!
  update: StoreUpdateWithoutFragmentsDataInput!
  create: StoreCreateWithoutFragmentsInput!
}

input StoreUpsertWithWhereUniqueWithoutStreamInput {
  where: StoreWhereUniqueInput!
  update: StoreUpdateWithoutStreamDataInput!
  create: StoreCreateWithoutStreamInput!
}

input StoreWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  stream: StreamWhereInput
  fragments_every: FragmentWhereInput
  fragments_some: FragmentWhereInput
  fragments_none: FragmentWhereInput
  exclusions_every: ExclusionWhereInput
  exclusions_some: ExclusionWhereInput
  exclusions_none: ExclusionWhereInput
  AND: [StoreWhereInput!]
  OR: [StoreWhereInput!]
  NOT: [StoreWhereInput!]
}

input StoreWhereUniqueInput {
  id: ID
}

type Stream {
  id: ID!
  name: String!
  metadata: Json
  stores(where: StoreWhereInput, orderBy: StoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Store!]
  schedules(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Schedule!]
}

type StreamConnection {
  pageInfo: PageInfo!
  edges: [StreamEdge]!
  aggregate: AggregateStream!
}

input StreamCreateInput {
  name: String!
  metadata: Json
  stores: StoreCreateManyWithoutStreamInput
  schedules: ScheduleCreateManyWithoutStreamInput
}

input StreamCreateManyInput {
  create: [StreamCreateInput!]
  connect: [StreamWhereUniqueInput!]
}

input StreamCreateOneWithoutSchedulesInput {
  create: StreamCreateWithoutSchedulesInput
  connect: StreamWhereUniqueInput
}

input StreamCreateOneWithoutStoresInput {
  create: StreamCreateWithoutStoresInput
  connect: StreamWhereUniqueInput
}

input StreamCreateWithoutSchedulesInput {
  name: String!
  metadata: Json
  stores: StoreCreateManyWithoutStreamInput
}

input StreamCreateWithoutStoresInput {
  name: String!
  metadata: Json
  schedules: ScheduleCreateManyWithoutStreamInput
}

type StreamEdge {
  node: Stream!
  cursor: String!
}

enum StreamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  metadata_ASC
  metadata_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StreamPreviousValues {
  id: ID!
  name: String!
  metadata: Json
}

type StreamSubscriptionPayload {
  mutation: MutationType!
  node: Stream
  updatedFields: [String!]
  previousValues: StreamPreviousValues
}

input StreamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StreamWhereInput
  AND: [StreamSubscriptionWhereInput!]
  OR: [StreamSubscriptionWhereInput!]
  NOT: [StreamSubscriptionWhereInput!]
}

input StreamUpdateDataInput {
  name: String
  metadata: Json
  stores: StoreUpdateManyWithoutStreamInput
  schedules: ScheduleUpdateManyWithoutStreamInput
}

input StreamUpdateInput {
  name: String
  metadata: Json
  stores: StoreUpdateManyWithoutStreamInput
  schedules: ScheduleUpdateManyWithoutStreamInput
}

input StreamUpdateManyInput {
  create: [StreamCreateInput!]
  update: [StreamUpdateWithWhereUniqueNestedInput!]
  upsert: [StreamUpsertWithWhereUniqueNestedInput!]
  delete: [StreamWhereUniqueInput!]
  connect: [StreamWhereUniqueInput!]
  disconnect: [StreamWhereUniqueInput!]
}

input StreamUpdateManyMutationInput {
  name: String
  metadata: Json
}

input StreamUpdateOneRequiredWithoutSchedulesInput {
  create: StreamCreateWithoutSchedulesInput
  update: StreamUpdateWithoutSchedulesDataInput
  upsert: StreamUpsertWithoutSchedulesInput
  connect: StreamWhereUniqueInput
}

input StreamUpdateOneRequiredWithoutStoresInput {
  create: StreamCreateWithoutStoresInput
  update: StreamUpdateWithoutStoresDataInput
  upsert: StreamUpsertWithoutStoresInput
  connect: StreamWhereUniqueInput
}

input StreamUpdateWithoutSchedulesDataInput {
  name: String
  metadata: Json
  stores: StoreUpdateManyWithoutStreamInput
}

input StreamUpdateWithoutStoresDataInput {
  name: String
  metadata: Json
  schedules: ScheduleUpdateManyWithoutStreamInput
}

input StreamUpdateWithWhereUniqueNestedInput {
  where: StreamWhereUniqueInput!
  data: StreamUpdateDataInput!
}

input StreamUpsertWithoutSchedulesInput {
  update: StreamUpdateWithoutSchedulesDataInput!
  create: StreamCreateWithoutSchedulesInput!
}

input StreamUpsertWithoutStoresInput {
  update: StreamUpdateWithoutStoresDataInput!
  create: StreamCreateWithoutStoresInput!
}

input StreamUpsertWithWhereUniqueNestedInput {
  where: StreamWhereUniqueInput!
  update: StreamUpdateDataInput!
  create: StreamCreateInput!
}

input StreamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  stores_every: StoreWhereInput
  stores_some: StoreWhereInput
  stores_none: StoreWhereInput
  schedules_every: ScheduleWhereInput
  schedules_some: ScheduleWhereInput
  schedules_none: ScheduleWhereInput
  AND: [StreamWhereInput!]
  OR: [StreamWhereInput!]
  NOT: [StreamWhereInput!]
}

input StreamWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  exclusion(where: ExclusionSubscriptionWhereInput): ExclusionSubscriptionPayload
  fragment(where: FragmentSubscriptionWhereInput): FragmentSubscriptionPayload
  label(where: LabelSubscriptionWhereInput): LabelSubscriptionPayload
  rule(where: RuleSubscriptionWhereInput): RuleSubscriptionPayload
  schedule(where: ScheduleSubscriptionWhereInput): ScheduleSubscriptionPayload
  service(where: ServiceSubscriptionWhereInput): ServiceSubscriptionPayload
  store(where: StoreSubscriptionWhereInput): StoreSubscriptionPayload
  stream(where: StreamSubscriptionWhereInput): StreamSubscriptionPayload
}

enum Weekday {
  MONDAY
  TUESDAY
  WENDSDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}
`
      }
    