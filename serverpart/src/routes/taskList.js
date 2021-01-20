import express from "express";
import TaskList from "../models/taskList.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const developerName = req.query;
    console.log(developerName);
    if (Object.keys(developerName).length === 0) {
      res.json({
        status: "error",
        message: "Не передано имя разработчика",
      });
    } else {
      const taskList = await TaskList.find();
      if (taskList) {
        // taskList.forEach((element) => {
          res.json({ status: "ok", message: { tasks: taskList } });
        // });
      } else { throw "jhm"; }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401).end();
  }
});
export default router;
