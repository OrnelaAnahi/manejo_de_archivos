const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

const path = require('path')

const fs = require('fs')
const { Console } = require('console')

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

app.listen(PORT, ()=>{
  console.log('server run on port 8080')
})

app.get('/productos', (req,res)=>{
  fs.readFile(path.join(__dirname+'/text.json'), 'utf-8', (err,data)=>{
    if(err){
      console.log(err)
      res.send('Error al obtener informacion')

    }else{
      res.send(JSON.parse(data))
    }
  })
})
app.get('/productoRandom', (req,res)=>{

  fs.readFile(path.join(__dirname+'/text.json'), 'utf-8', (err,data)=>{
    if(err){
      console.log(err)
      res.send('Error al obtener informacion')

    }else{
      arrayDeInformacion = JSON.parse(data)
      valor = arrayDeInformacion.length
      numeroRandom = getRandomInt(1, valor)
      let bsqDeNR = arrayDeInformacion.find(product => product.id == numeroRandom)
      res.send(bsqDeNR)
    }
  })
})
