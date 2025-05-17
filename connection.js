import mongoose from "mongoose";
export const connectDB = async () => {
//Write missing code here
mongoose
  .connect(
    'mongodb+srv://ann-riya18:1812005@cluster0.zwffitz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
}