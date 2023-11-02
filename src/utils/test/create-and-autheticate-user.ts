import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateUser(app: FastifyInstance) {
  const email = `john.doe_${Math.floor(Math.random() * 1001)}@example.com`

  await request(app.server).post('/users').send({
    name: 'John Doe',
    email,
    password: '123456',
  })

  const authResponse = await request(app.server).post('/sessions').send({
    email,
    password: '123456',
  })

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  const { token } = authResponse.body

  return { token, email, userId: user?.id }
}
