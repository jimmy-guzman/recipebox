import { createApp } from './app'

const httpErrorHandler = (err: { message: unknown }): void => {
  // eslint-disable-next-line no-console
  console.error(err.message)
}

const main = (): void => {
  const app = createApp()
  const port = process.env.PORT ?? 3100

  const server = app.listen(port)

  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)

  server.on('error', httpErrorHandler)
}

main()
