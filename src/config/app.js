import { config } from "dotenv";

config();

export const application = {
    port: process.env.PORT,
    db: process.env.MONGO_URI,
};
