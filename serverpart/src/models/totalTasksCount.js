import mongoose from "mongoose";

const TotalTaskCountShema = mongoose.Schema({
  totalTaskCount: {
    type: Number,
  },
});

export default mongoose.model("TotalTaskCount", TotalTaskCountShema);
