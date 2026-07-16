import config from '../sanity.config'
import { schemaTypes, singletonNames } from '../sanity/schemaTypes'
import { structure } from '../sanity/structure'

type BuilderNode = {
  kind: string
  idValue?: string
  titleValue?: string
  childValue?: BuilderNode
  itemsValue?: BuilderNode[]
  schemaTypeValue?: string
  documentIdValue?: string
  filterValue?: string
  paramsValue?: Record<string, unknown>
  orderingValue?: unknown[]
  iconValue?: unknown
  apiVersionValue?: string
  title: (value: string) => BuilderNode
  id: (value: string) => BuilderNode
  icon: (value: unknown) => BuilderNode
  apiVersion: (value: string) => BuilderNode
  child: (value: BuilderNode) => BuilderNode
  items: (value: BuilderNode[]) => BuilderNode
  schemaType: (value: string) => BuilderNode
  documentId: (value: string) => BuilderNode
  filter: (value: string) => BuilderNode
  params: (value: Record<string, unknown>) => BuilderNode
  defaultOrdering: (value: unknown[]) => BuilderNode
  getId: () => string | undefined
}

type TemplateLike = {
  id: string
  title: string
  schemaType: string
  value?: Record<string, unknown>
}

const documentTypeNames = [
  'blogPost',
  'journalEntry',
  'fatherPiece',
  'project',
  'documentary',
  'book',
  'timelineEvent',
]

const requiredSingletons = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'fatherPage',
  'workPage',
  'coursePage',
  'contactPage',
]

const requiredObjectTypes = ['portableContent', 'imageWithMetadata', 'routeLink']

const requiredTemplateIds = [
  'blogPost-health',
  'blogPost-life',
  'blogPost-opinion',
  'blogPost-personal',
  'journalEntry-thought',
  'journalEntry-read',
  'journalEntry-observation',
  'fatherPiece-essay',
  'fatherPiece-note',
]

const requiredDeskTitles = [
  'Istiaque Ahamed',
  'Website',
  'Home',
  'About',
  'Father opening',
  'Work',
  'Course',
  'Contact',
  'Settings and socials',
  'Blog & Journal',
  'Blog posts',
  'Journal entries',
  'Feed preview',
  'Father',
  'Opening and archive images',
  'Essays and notes',
  'Projects',
  'Films',
  'Timeline',
  'Bookshelf',
]

const requiredDeskIds = [
  'website',
  'writing',
  'father',
  'feedPreview',
  'project',
  'documentary',
  'timelineEvent',
  'book',
  ...requiredSingletons,
]

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

function createNode(kind: string, initialId?: string): BuilderNode {
  const node = {
    kind,
    idValue: initialId,
    title(value: string) {
      this.titleValue = value
      return this
    },
    id(value: string) {
      this.idValue = value
      return this
    },
    icon(value: unknown) {
      this.iconValue = value
      return this
    },
    apiVersion(value: string) {
      this.apiVersionValue = value
      return this
    },
    child(value: BuilderNode) {
      this.childValue = value
      return this
    },
    items(value: BuilderNode[]) {
      this.itemsValue = value
      return this
    },
    schemaType(value: string) {
      this.schemaTypeValue = value
      return this
    },
    documentId(value: string) {
      this.documentIdValue = value
      return this
    },
    filter(value: string) {
      this.filterValue = value
      return this
    },
    params(value: Record<string, unknown>) {
      this.paramsValue = value
      return this
    },
    defaultOrdering(value: unknown[]) {
      this.orderingValue = value
      return this
    },
    getId() {
      return this.idValue
    },
  } satisfies BuilderNode

  return node
}

function collectNodes(node: BuilderNode, output: BuilderNode[] = []) {
  output.push(node)

  if (node.childValue) {
    collectNodes(node.childValue, output)
  }

  node.itemsValue?.forEach((item) => collectNodes(item, output))

  return output
}

const mockStructureBuilder = {
  list: () => createNode('list'),
  listItem: () => createNode('listItem'),
  document: () => createNode('document'),
  documentList: () => createNode('documentList'),
  documentTypeList: (schemaType: string) => createNode('documentTypeList', schemaType),
  divider: () => createNode('divider'),
  documentTypeListItems: () =>
    [...documentTypeNames, ...requiredSingletons].map((name) =>
      createNode('documentTypeListItem', name).title(name),
    ),
}

const schemaTypeNames = new Set(schemaTypes.map((schemaType) => schemaType.name))

for (const typeName of [...documentTypeNames, ...requiredSingletons, ...requiredObjectTypes]) {
  assert(schemaTypeNames.has(typeName), `Missing schema type: ${typeName}`)
}

for (const singletonName of requiredSingletons) {
  assert(singletonNames.has(singletonName), `Missing singleton registration: ${singletonName}`)
}

const workspace = Array.isArray(config) ? config[0] : config
const templatesResolver = workspace.schema?.templates
assert(typeof templatesResolver === 'function', 'Sanity config must define create templates')

const defaultTemplates = [...documentTypeNames, ...requiredSingletons].map((name) => ({
  id: `default-${name}`,
  title: `Default ${name}`,
  schemaType: name,
  value: {},
}))
const templates = templatesResolver(defaultTemplates, {} as never) as TemplateLike[]
const templateIds = new Set(templates.map((template) => template.id))

for (const templateId of requiredTemplateIds) {
  assert(templateIds.has(templateId), `Missing create template: ${templateId}`)
}

for (const singletonName of requiredSingletons) {
  assert(
    !templates.some((template) => template.schemaType === singletonName),
    `Singleton should not appear as a create template: ${singletonName}`,
  )
}

const root = structure(mockStructureBuilder as never, {} as never)
const nodes = collectNodes(root as BuilderNode)
const titles = new Set(nodes.map((node) => node.titleValue).filter(Boolean))
const ids = new Set(nodes.map((node) => node.idValue).filter(Boolean))
const rootItemIds = (root as BuilderNode).itemsValue
  ?.map((node) => node.idValue)
  .filter((id): id is string => Boolean(id)) ?? []

for (const title of requiredDeskTitles) {
  assert(titles.has(title), `Missing Studio desk title: ${title}`)
}

for (const id of requiredDeskIds) {
  assert(ids.has(id), `Missing Studio desk id: ${id}`)
}

assert(
  new Set(rootItemIds).size === rootItemIds.length,
  `Top-level Studio desk IDs must be unique: ${rootItemIds.join(', ')}`,
)

for (const singletonName of requiredSingletons) {
  const singletonItem = nodes.find((node) => node.kind === 'listItem' && node.idValue === singletonName)
  assert(singletonItem?.childValue, `Missing singleton desk child: ${singletonName}`)
  assert(
    singletonItem.childValue.schemaTypeValue === singletonName &&
      singletonItem.childValue.documentIdValue === singletonName,
    `Singleton desk item must edit one document: ${singletonName}`,
  )
}

const feedPreview = nodes.find((node) => node.idValue === 'feedPreview')
assert(feedPreview?.childValue, 'Missing Feed preview child list')
assert(feedPreview.childValue.filterValue === '_type in $types', 'Feed preview must query the shared Feed types')
assert(
  Array.isArray(feedPreview.childValue.paramsValue?.types) &&
    feedPreview.childValue.paramsValue.types.length === 2 &&
    ['blogPost', 'journalEntry'].every((typeName) =>
      (feedPreview.childValue?.paramsValue?.types as string[]).includes(typeName),
    ),
  'Feed preview params must include Blog and Journal only',
)

console.log(
  `Sanity authoring verified: ${schemaTypeNames.size} schema types, ${templates.length} create templates, ${nodes.length} desk nodes.`,
)
