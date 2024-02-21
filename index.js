const express = require('express')
const app = express()
const host = 'localhost'
const port = 3000

app.get('/register', (req, res) => {
    res.send('Esto es el registro')
})

app.get('/profile', (req, res) => {
    res.send('Esto es el profile')
})

app.get('/login', (req, res) => {
    res.send('Esto es el login')
})

app.listen(port, host)
console.log('Servidor en el puerto 3000')

module.exports
