import express from "express";
import TaskList from "../models/taskList.js";
import TotalTaskCount from "../models/totalTasksCount.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const developerName = req.query;
    if (Object.keys(developerName).length === 0) {
      res.json({
        status: "error",
        message: "Не передано имя разработчика",
      });
    } else {
      const { totalTaskCount } = await TotalTaskCount.findOne();
      const taskList = await TaskList.find();
      if (!!taskList.length && !!totalTaskCount) {
        res.json({ status: "ok", message: { total_task_count: totalTaskCount, tasks: taskList } });
      } else { throw "error"; }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(404).end();
  }
});
export default router;
