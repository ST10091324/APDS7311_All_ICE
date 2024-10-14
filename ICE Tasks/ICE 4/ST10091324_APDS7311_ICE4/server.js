const fs = require('fs')
const key = fs.readFileSync('./keys/localhost.decrypted.key')
const cert = fs.readFileSync('./keys/localhost.crt')

const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.status(200).send('"God will provide" - Isaac, 2024')
})

const https = require('https')
const server = https.createServer({ key, cert }, app)

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`)
})