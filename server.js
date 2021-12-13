require('dotenv').config()
const epress=require('express')
const server=express()

server.listen(process.env.PORT)

server.get('/',(req,res)=>{
    res.send('lets Go Online')

})