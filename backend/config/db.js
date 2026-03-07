
// import dns from 'dns';
// import mongoose from "mongoose";

// dns.setServers(['8.8.8.8', '8.8.4.4']);

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://jadhavanilsitit_db_user:ZKG3k1hkZVu7kxvH@cluster0.iwq60km.mongodb.net/?appName=Cluster0"
//     );

//     console.log("DB connected");
//   } catch (err) {
//     console.error("DB connection error:", err);
//   }
// };
import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
  try {
    const mongoURI =
      "mongodb+srv://jadhavanilsitit_db_user:ZKG3k1hkZVu7kxvH@cluster0.iwq60km.mongodb.net/expense_tracker?retryWrites=true&w=majority";

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};