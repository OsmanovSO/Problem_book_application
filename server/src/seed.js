import dotenv from "dotenv";
import mongoose from "mongoose";
import TaskList from "./models/taskList.js";

dotenv.config();

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

mongoose.connect("mongodb://localhost:27017/taskList", options, (err) => {
  if (err) return console.log(err);
  console.log("Mongooseeee is conecting ON Local");
});

const taskList = [{
  username: "Salman",
  email: "salman@mail.ru",
  text: "qwertyuiophgfdvfgvbnm",
  status: 12,
},
{
  username: "Salman",
  email: "salman@mail.ru",
  text: "qwertyuiophgfdvfgvbnm",
  status: 12,
}];

TaskList.insertMany(taskList).then(() => {
  mongoose.connection.close();
});

// const d = new TaskList(taskList);
// d.save().then(() => {
//   mongoose.connection.close();
// });
