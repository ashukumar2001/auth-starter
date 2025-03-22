import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { auth } from './lib/auth.jsx';
import { cors } from "hono/cors";
const app = new Hono();
app.use('*', cors({
  origin: ['http://localhost:5173'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get('/', (c) => {
  return c.html(`<h1>Hello world</h1>`)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
