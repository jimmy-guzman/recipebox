interface HelloResponse {
  greeting: string
  name: string
}

export default {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Query: {
    hello: (_root: unknown, args: { name: string }): HelloResponse => {
      return {
        name: args.name,
        greeting: `Hello ${args.name}`,
      }
    },
  },
}
