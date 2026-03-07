import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jadhavanilsitit_db_user:ZKG3k1hkZVu7kxvH@cluster0.iwq60km.mongodb.net/expense_tracker"
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};