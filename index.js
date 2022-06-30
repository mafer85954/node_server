const express = require('express')
const app = express()

app.set('port', 3000)

//routes
app.get('/', (req, res)=>{
    res.send('hola mundo!!')
})

app.get('/persona', (req, res)=>{
    res.send('hola, mi nombre es María Fernanda Toledo Coello y tengo 21 años. \n Nací un 22 de enero del 2001 y soy acuario')
})

app.listen(app.get('port'), ()=>{
    console.log('Aplicacion corriendo en el puerto 3000')
})


