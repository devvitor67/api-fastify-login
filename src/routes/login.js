import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function loginRoute(app) {
    app.post('/login', async (req, res) => {
        const { email, password } = req.body
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ error: '🔴 Credenciais inválidas' });
        }
        const token = app.jwt.sign({ email, name: user.name }, { expiresIn: '6h' })
        return res.send({ message: "🟢 Login efetuado com sucesso", token: token })
    })
}