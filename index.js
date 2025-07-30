require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    port: port,
    host: host 
  })
})

app.get('/twitter',(req,res)=>{
    res.send("HELLO");
})

app.get('/login',(req,res)=>{
    res.send("<h1>HELLO</h1>");
})

app.listen(port, host, () => {
  console.log(`Example app listening on host ${host} and port ${port}`)
})
