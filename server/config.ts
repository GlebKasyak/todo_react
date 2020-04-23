import path from "path";
import dotenv from "dotenv";

const root = path.join(__dirname, ".env");
dotenv.config({ path: root });

export default {
    PORT: process.env.PORT!,
    NODE_ENV: process.env.NODE_ENV!,
    MONGODB_URL: process.env.MONGODB_URL!
}