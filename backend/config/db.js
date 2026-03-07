
import dns from 'dns';
import mongoose from "mongoose";

dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jadhavanilsitit_db_user:ZKG3k1hkZVu7kxvH@cluster0.iwq60km.mongodb.net/?appName=Cluster0"
    );

    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};
