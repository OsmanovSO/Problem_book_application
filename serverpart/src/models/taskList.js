import mongoose from "mongoose";

const TaskShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  status: Number,
});

export default mongoose.model("TaskList", TaskShema);
