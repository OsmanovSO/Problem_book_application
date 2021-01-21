import express from "express";
import TaskList from "../models/taskList.js";
import TotalTaskCount from "../models/totalTasksCount.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { username, email, text } = req.body;
  try {
    const newTaskList = await new TaskList({ username, email, text });
    const taskCount = await TotalTaskCount.findOne();
    if (taskCount === null) {
      const newTaskLists = await new TaskList({ username, email, text });
      await newTaskLists.save();
      const newtaskCount = await new TotalTaskCount({ totalTaskCount: 1 });
      await newtaskCount.save();
      const taskList = await TaskList.findOne({ username, email, text });
      if (taskList) {
        res.json({ status: "ok", message: taskList });
      } else { throw "error"; }
    } else {
      taskCount.totalTaskCount += 1;
      await newTaskList.save();
      await taskCount.save();
      const taskList = await TaskList.findOne({ username, email, text });
      if (taskList) {
        res.json({ status: "ok", message: taskList });
      } else { throw "error"; }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(404).json({
      status: "ok",
      message: {
        username: "Поле является обязательным для заполнения",
        email: "Неверный email",
        text: "Поле является обязательным для заполнения",
      },
    }).end();
  }
});
export default router;
