import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

  
const app = express();
const PORT = 5000;
  
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/user', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
