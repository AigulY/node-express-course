//  npm - global commands, come with node
//npm --version
// local dependency - use it only in this particluar project
// npm i <packageName>

//global dependancy - use it in any project
//npm install -g 

// const http = require ('http');

// const server = http.createServer()
    
// server.on('request', (req,res) => {
//     res.end('Welcome')
// })

// server.listen(5000);

var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)



