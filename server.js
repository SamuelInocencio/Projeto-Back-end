import express from 'express'
import {
    PrismaClient
} from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.get('/usuarios', (req, res) => {


    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(201).json(user)
})



app.listen(3000)


/*
Mongodb
Username: samuelferreirainocencio
Password: M8GU1t24P6smrkOG
*/

// Concluída aula 13 - Criando o primeiro banco de dados