import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { auth } from './lib/auth.jsx';
import { cors } from "hono/cors";
import { db } from './db/index.js';
import type { NewFoodEntry } from './db/types.js';
import { foodEntry } from './db/schema.js';
import { createInsertSchema } from 'drizzle-zod';
import { zValidator } from '@hono/zod-validator';
import { authMiddleware } from './middleware/auth.js';
import corsConfig from './config/cors.js';

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  }
}>();

app.use('*', cors(corsConfig));
app.use("*", authMiddleware)

app.get('/', (c) => {
  return c.html(`<h1>Hello world</h1>`)
})

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

const insertFoodEntrySchema = createInsertSchema(foodEntry);
app.post("/api/food-entries", zValidator("json", insertFoodEntrySchema.omit({ userId: true })), async (c) => {
  const d = await c.req.json<NewFoodEntry>();
  console.log(d, c.get("user"));

  // await db.insert(foodEntry).values({ calories: 24, name: "Apple", userId: "34" })
  return c.json({ status: true });
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
