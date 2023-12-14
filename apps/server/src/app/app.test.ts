import supertest from 'supertest'

import { createApp } from './app'

const request = supertest(createApp().callback())

describe('server', () => {
  it('should respond for health check', async () => {
    const response = await request.get('/healthz')

    expect(response.header['content-type']).toBe('text/plain; charset=utf-8')
  })
})
