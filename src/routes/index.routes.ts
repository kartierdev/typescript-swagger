import { Router } from "express";
import {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
  count,
} from "../controllers/tasks.cotroller";

const router = Router();

/**
 * @swagger
 * components:
 *  shcemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
*            type: string
*            description: the auto-generated id of task
 *        name: 
 *           type: string
 *           description: the name of the task
 *        description:
 *           
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *   sumary: Return a Task list
 *   response:
 *    200:
 *      description: the list of tasks
 *      content:
 *        application/json
 *          schema: 
 *            type: aaray
 */

router.get("/tasks", getTasks);

router.get("/tasks/count", count);

router.post("/tasks", createTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
