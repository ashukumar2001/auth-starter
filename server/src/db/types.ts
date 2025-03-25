import type { foodEntry } from "./schema.js";

export type NewFoodEntry = typeof foodEntry.$inferInsert;
export type FoodEntry = typeof foodEntry.$inferSelect;