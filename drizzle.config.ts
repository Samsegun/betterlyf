import type { Config } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env" });

if (!process.env.DATABASE_URL)
    throw new Error("DATABASE_URL not found in environment");

export default {
    schema: "./app/_db/schema.ts",
    out: "./app/_db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    strict: true,
} satisfies Config;
