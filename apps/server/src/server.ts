import { createApp } from './app'

const main = (): void => {
  const app = createApp()
  const port = process.env.PORT ?? 3100

  app.listen(port)

  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
}

main()
