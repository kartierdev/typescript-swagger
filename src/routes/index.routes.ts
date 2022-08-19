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
 *    TasksNotFound: 
 *       type: object
 *       properties:
 *          msg:
 *           type: string
 *           description: a message not found tasks 
 *       example:
 *         msg: Task was not found
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema: 
 *        type: string
 *      description: The task id 
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */
/**
 * @swagger
 * /tasks:
 *  get:
 *    sumary: Return a Task list
 *    tags: [Tasks]
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
 *    tags: [Tasks]
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

/**
 * @swagger
 * /tasks: 
 *  post:
 *    sumary: Create a new task
 *    tags: [Tasks]
 *    requestBody: 
 *      required: true
 *      content:
 *         application/json:
 *           schema: 
 *             $ref: "#/components/schemas/Task"
 *    responses: 
 *      200:
 *        description: The successful createTask 
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Task"
 *      500:
 *        description: The some error occurred
 */
router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks/{id}:
 *  get: 
 *    sumary: Get task by id 
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses: 
 *      200:
 *        description: The task was successfully retrieved
 *        content:
 *          application/json:
 *             schema: 
 *               $ref: "#/components/schemas/Task"
 *      404:
 *      description: The task could not be retrieved
 *      content:
 *        application/json:
 *           schema: 
 *             
 */

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
