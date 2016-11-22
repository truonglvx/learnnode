'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 8001 })

require('./routes')(server)

 server.route({
        path: '/echo',
        method: 'POST',
        handler: (req, reply) => {
            server.publishFar('/echo', req.payload)
            reply(req.payload)
        }
    })

server.start((err) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }
  console.log('server started', server.info.uri)
})