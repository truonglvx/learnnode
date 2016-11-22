'use strict'

const Nes = require('nes')

const client = new Nes.Client('ws://104.197.189.66:8001')

client.connect((err) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }

  console.log('connected')

  setInterval(() => {

         client.request({
            path: '/echo4',
            method: 'POST',
            payload: { hello: 'world 4' }
        }, (err) => {
            if (err) {
            console.error(err.message)
            process.exit(1)
            }

            //client.disconnect()
        })

  }, 100)

 
})