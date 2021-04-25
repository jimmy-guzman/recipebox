import supertest from 'supertest'

import { createApp } from './app'

const request = supertest(createApp().callback())

describe('server', () => {
  it('should respond for health check', async () => {
    const response = await request.get('/healthz')

    expect(response.header['content-type']).toBe('text/plain; charset=utf-8')
  })
  it('should query hello', async () => {
    const response = await request.post('/graphql').send({
      query: `
          {
            hello(name: "Bob"), {
              name,
              greeting
            }
          }
        `,
    })

    expect(response.header['content-type']).toBe('application/json')
    expect(response.status).toBe(200)
    expect(response.body.data.hello.greeting).toBe('Hello Bob')
    expect(response.body.data.hello.name).toBe('Bob')
  })
})
