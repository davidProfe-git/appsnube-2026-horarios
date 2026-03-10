const express = require('express')
const application = express()

application.get('/aleja' , (req,res)=>{
  res.send(`<h2>hola soy ${6+3} </h2>`)
})

application.listen(3000, ()=>{
    console.log ("solo se puede ejecutar desde el servidor")
})