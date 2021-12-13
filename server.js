const epress=require('express')
const server=express()
require('dotenv').config()

server.listen(process.env.PORT)

server.get('/',(req,res)=>{
    res.send('lets Go Online')

})