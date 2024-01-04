import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.post('/hello', async (request, reply) => {
  const transactions = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')
  return reply.send(transactions).code(201)
})

app.get('/hello', async (request, reply) => {
  const transactions = await knex('transactions').select()
  return reply
    .send({
      transactions,
    })
    .code(201)
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server running on port 3333 🚀')
  })
