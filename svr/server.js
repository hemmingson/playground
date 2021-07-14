const Hapi = require('@hapi/hapi')
const {
  parsed: { PORT: port, PATH },
} = require('dotenv').config()

;(async () => {
  const server = Hapi.server({
    port,
    host: 'localhost',
  })

  await server.register(require('@hapi/inert'))
  server.route({
    method: 'GET',
    path: '/',
    handler: (_, h) => h.file(PATH),
  })

  await server.start()
  console.log(server.info.uri)
})()
