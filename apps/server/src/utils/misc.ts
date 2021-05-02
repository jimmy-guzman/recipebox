import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const SCHEMA_DIR = 'src/schema'
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
