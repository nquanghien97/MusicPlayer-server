import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import musicRouter from './router/music.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get all music
app.use('/api', musicRouter)

// connect mongoose
mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://nquanghien97:quanghien119@musicdatabase.awd4gio.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("database connected")
  })
  .catch((error)=> {
    console.log('Error connecting to database', error);
  });

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Music Player sever!!',
  });
});

app.listen(port, () => {
  console.log(`Our server is live on ${port}`);
});