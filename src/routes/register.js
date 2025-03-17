import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function registerRoute(app) {
    app.post('/register', async (req, res) => {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        try {
            await prisma.user.create({ data: {name, email, password: hashedPassword} })
            return res.status(201).send({ message: "🟢 Usuário criado" })
        } catch(error) {
            return res.status(400).send({ error: "🔴 Erro ao criar usuário" })
        }
    })
}