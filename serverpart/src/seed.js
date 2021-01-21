import dotenv from "dotenv";
import mongoose from "mongoose";
import TaskList from "./models/taskList.js";
import TotalTaskCount from "./models/totalTasksCount.js";


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
  username: "Osman",
  email: "osman@mail.ru",
  text: "gafggfshjyhtsrymhnbftnbgfs",
  status: 12,
},
{
  username: "Maga",
  email: "maga@mail.ru",
  text: "asdgfdagfdgafgdgadgfg",
  status: 12,
}];

TaskList.insertMany(taskList).then(() => {
  mongoose.connection.close();
});

const totalTaskCount = {
  totalTaskCount: 1,
}

const d = new TotalTaskCount(totalTaskCount);
d.save().then(() => {
  mongoose.connection.close();
});
