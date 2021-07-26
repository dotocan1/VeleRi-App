
// const file = fs.createWriteStream('file.jpg')
// const downloadImage = http.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', function (response) {
//   response.pipe(file)
// })

/*
  dependencies
*/
const express = require('express')
// const http = require('http') // or 'https' for https:// URLs
// const fs = require('fs')
/*
  config - express
*/
const app = express()

/*
  endpoint
*/

app.get('/', (request, response) => {
  response.send('I love Node')
  console.log('Our endpoint is working')
})

function testingThis () {
  alert('hey')
  console.log('hey')
}

/*
  listen
*/

app.listen(3000)
