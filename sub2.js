'use strict'

const Nes = require('nes')

const client = new Nes.Client('ws://104.197.189.66:8000')

client.connect((err) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }

  console.log('connected')

  client.subscribe('/echo2', (message) => {
    console.log(message)
  }, (err) => {
    if (err) {
      console.error(err.message)
      process.exit(1)
    }

    console.log('subscribed')
  })
})