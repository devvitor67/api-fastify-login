export default async function protectedRoute(app) {
    app.get('/protected', {
      preHandler: async (req, reply) => {
        try {
          await req.jwtVerify()
        } catch (err) {
          return reply.status(401).send({ error: '🔴 Token ausente ou inválido' })
        }
      }
    }, async (req, res) => {
      const { name } = req.user
      return res.send({ message: `Bem-vindo, ${name}` })
    })
}