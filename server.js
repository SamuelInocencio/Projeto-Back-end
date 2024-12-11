import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json({
        message: "Usuário criado com sucesso."
    })
})



app.listen(3000)


/*
Mongodb
Username: samuelferreirainocencio
Password: M8GU1t24P6smrkOG
*/

// Concluída aula 13 - Criando o primeiro banco de dados