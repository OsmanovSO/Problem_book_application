import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskList from "./src/routes/taskList.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 0;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

mongoose.connect(process.env.MONGO_DB, options, (err) => {
  if (err) return console.log(err);
  console.log("Mongooseeee is conecting ON Local");
});

const host = app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  }),
);

// Подключение middleware, который парсит JSON от клиента
app.use(express.json());
app.use("/uxcandy.com/~shapoval/test-task-backend/v2", taskList);
app.listen(PORT, () => {
  console.log("Server has been started on port ", PORT);
});
