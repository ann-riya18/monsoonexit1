import express from "express";
import cors from "cors";
import { connectDB } from './connection.js';
import BlogModel  from './model.js';

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
connectDB();


app.post("/add", async (req, res) => {
  const { title, content, img_url } = req.body;
  try {
    const newData = new BlogModel({title,content,img_url});
    await newData.save()
    return res.status(200).json({message:"Blog Added"})
  } catch (error) {
    return res.status(400)
  }
});



app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
 console.log(`${PORT} is up and running`)
});