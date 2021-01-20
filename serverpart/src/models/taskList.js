import mongoose from "mongoose";

const TaskShema = mongoose.Schema({
  username: String,
  email: String,
  text: String,
  status: Number,

});

export default mongoose.model("TaskList", TaskShema);
