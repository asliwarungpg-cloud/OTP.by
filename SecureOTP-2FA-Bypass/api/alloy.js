const express = require('express')

const api = require('./app')
const config = require('./config')

const app = express()

app.get('/', (_request, response) => {
  response.type('html').send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>OTP API development environment</title>
  </head>
  <body style="margin:0;background:#f4f7f9;color:#17212b;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
    <main style="box-sizing:border-box;display:grid;min-height:100vh;place-items:center;padding:24px">
      <section style="width:min(100%,680px);border:1px solid #d7e0e7;border-radius:16px;background:#fff;padding:clamp(24px,6vw,48px);box-shadow:0 18px 50px rgba(23,33,43,.08)">
        <p style="margin:0 0 12px;color:#28666e;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase">Alloy development environment</p>
        <h1 style="margin:0;font-size:clamp(30px,6vw,48px);line-height:1.08">OTP API is running</h1>
        <p style="margin:20px 0 28px;color:#52616b;font-size:18px;line-height:1.6">The repository's Express service loaded successfully in a local Docker container. External telephony and messaging integrations are not configured.</p>
        <div style="display:flex;align-items:center;gap:10px;border-radius:10px;background:#edf7f4;padding:14px 16px;color:#24594f;font-weight:650">
          <span style="display:block;width:10px;height:10px;border-radius:50%;background:#2d8a74"></span>
          Service healthy on port ${config.port}
        </div>
      </section>
    </main>
  </body>
</html>`)
})

app.get('/healthz', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api', api)

app.listen(config.port, '0.0.0.0', () => {
  console.log(`Alloy development server listening on ${config.port}`)
})
