import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

const dbConnection = async () => {
  try {
    console.log("DB_URL from env:", process.env.DB_URL);

    const { connection } = await mongoose.connect(process.env.DB_URL, {
      dbName: "Job_Portal",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connection.host}`);
    console.log(`MongoDB connected: port 4000`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default dbConnection;
