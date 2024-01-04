import fastify from "fastify";

const app = fastify()

app.get('/hello', (request, reply) => {
  return reply.send({ message: 'Hello World' })
})

app.listen({
  port: 3333
}).then(() => {
  console.log('🚀 HTTP Server running on port 3333 🚀')
})