export default async function healthRoute(app) {
    app.get('/health', (_, res) => {
      return res.send({ status: 'OK' });
    })
  }