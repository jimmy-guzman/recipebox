import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const SCHEMA_DIR = 'src/schema'
const QUERIES_DIR = 'src/queries'
const SCHEMA_EXT = '.graphql'

const absolutePath = (relativePath: string): string => {
  return join(process.cwd(), relativePath)
}

/**
 * Fetches all schema definition files
 */
const schemaFiles = readdirSync(absolutePath(SCHEMA_DIR)).filter((file) =>
  file.includes(SCHEMA_EXT)
)

/**
 * Concatenate all schema definition files into a custom schema
 */
export const schema = schemaFiles
  .map((file) => readFileSync(absolutePath(`${SCHEMA_DIR}/${file}`)).toString())
  .join()

/**
 * Grabs query resolvers based on the custom schemaFiles
 */
export const queryResolvers = schemaFiles
  .map((file) => file.replace(SCHEMA_EXT, ''))
  .map(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    (file) => require(absolutePath(`${QUERIES_DIR}/${file}`)).default
  )
  .reduce((acc, curr) => ({ ...acc, ...curr.Query }), {})

/**
 * Grabs mutation resolvers based on the custom schemaFiles
 */
export const mutationResolvers = schemaFiles
  .map((file) => file.replace(SCHEMA_EXT, ''))
  .map(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    (file) => require(absolutePath(`${QUERIES_DIR}/${file}`)).default
  )
  .reduce((acc, curr) => ({ ...acc, ...curr.Mutation }), {})
