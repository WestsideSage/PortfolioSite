import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "../env";

const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql);

export async function runMigrations() {
  await migrate(db, { migrationsFolder: "./drizzle" });
}
