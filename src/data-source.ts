import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { TrainingPlan } from "./entities/TrainingPlan";
import { NutritionPlan } from "./entities/NutritionPlan";
import { TrainingLog } from "./entities/TrainingLog";
import { Article } from "./entities/Article";
import { Subscription } from "./entities/Subscription";
import { User } from "./entities/User";

dotenv.config({ quiet: true });
const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("Database environment variables are missing");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,

  synchronize: true,

  entities: [
    User,
    TrainingPlan,
    NutritionPlan,
    TrainingLog,
    Article,
    Subscription,
  ],

  ssl: {
    rejectUnauthorized: false,
  },
});
