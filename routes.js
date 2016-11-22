'use strict'

const Nes = require('nes')
const Multines = require('multines')


module.exports = (server) => {
    const plugin = {
        register: Multines.register,
        options: {
            type: 'redis'
        }
    }

    server.register([Nes, plugin], (err) => {
        if(err) {
            throw err
        }
    })

    server.subscriptionFar('/echo')
   
    server.route({
        path: '/',
        method: 'GET',
        handler: (req, reply) => {
            reply("hello buddy!!!")
        }
    })
    

}