'use strict'

const Nes = require('nes')

const client = new Nes.Client('ws://localhost:8001')

client.connect((err) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }

  console.log('connected')

  setInterval(() => {

         client.request({
            path: '/echo',
            method: 'POST',
            payload: { hello: 'world' }
        }, (err) => {
            if (err) {
            console.error(err.message)
            process.exit(1)
            }

            //client.disconnect()
        })

  }, 100)

 
})