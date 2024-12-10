import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send("Olá, rota acessada com sucesso!!!")
})

app.post('/usuarios', (req, res) => {
    res.send("Olá, aqui é uma rota post!!!")
})




app.listen(3000)