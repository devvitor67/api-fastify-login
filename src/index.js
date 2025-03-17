import fastify from 'fastify'
import jwt from '@fastify/jwt'
import { PrismaClient } from '@prisma/client'
import registerRoute from './routes/register.js'
import loginRoute from './routes/login.js'
import protectedRoute from './routes/protected.js'
import healthRoute from './routes/health.js'
import cors from '@fastify/cors'

const app = fastify()
const _ = new PrismaClient()

app.register(cors, { origin: '*' })
app.register(jwt, { secret: process.env.JWT_SECRET })
app.register(registerRoute)
app.register(loginRoute)
app.register(protectedRoute)
app.register(healthRoute)

app.listen({ port: 3333 }, error => {
    if (error) throw error
    console.log("Servidor on-line 🟢")
})