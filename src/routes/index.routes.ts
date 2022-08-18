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
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        name:
 *          type: string
 *          description: the name of the task
 *        description:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id : o1ZHug76dW-aH_HPhqBN7
 *        name: All tasks
 *        description: I have all tasks
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    sumary: Return a Task list
 *    responses:
 *      200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */

router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    sumary: Get total tasks count
 *    responses:
 *       200: 
 *         description: The total number of tasks
 *         content: 
 *            text/plane: 
 *               schema:
 *                type: integer 
 *                example: 15
 */

router.get("/tasks/count", count);

router.post("/tasks", createTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
