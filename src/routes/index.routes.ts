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
 *         id:
 *           type: string
 *           description: the auto-generated id of the task
 *         name: 
 *           type: string
 *           description: the name of the task
 *         description: 
 *            type: string
 *            description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: kHIwIE0xQ3UnXoHrFeUAw
 *        name: My fisrt task 
 *        description: more tasks
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg: 
 *          type: string
 *          description: a message for the not found task
 *      example:
 *        msg: Task was not found 
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: the task id
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
 *    summary: Return a list of tasks
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: The list of tasks 
 *        content: 
 *           application/json:
 *              schema: 
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Task'
 */ 
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get: 
 *    summary: Get total tasks
 *    tags: [Tasks]
 *    responses: 
 *      200:
 *       description: The total number of task 
 *       content:
 *          text/plane:
 *            schema:
 *              type: integer
 *            example: 15
 */
router.get("/tasks/count", count);

/**
 * @swagger
 * /tasks:
 *  post: 
 *   summary: Create a new task
 *   tags: [Tasks]
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *   responses: 
 *     200:
 *       description: The task was created successfully
 *       content:
 *         application/json:
 *            schema:
 *             $ref: '#/components/schemas/Task'
 *     500:
 *      description: The task could not be created successfully
 */
router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *   summary: Get a only specified task 
 *   tags: [Tasks]
 *   parameters:
 *     - $ref: '#/components/parameters/taskId'
 *   responses: 
 *     200:
 *       description: the task was successfully retrieved
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/Task'
 *     404:
 *       description: the task could not be retrieved
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/TaskNotFound'
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete: 
 *    summary: Delete a one task
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: the task was successfully deleted
 *        content:
 *          application/json:
 *            schema: 
 *              $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema: 
 *              $ref: '#/components/schemas/TaskNotFound'
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *   summary: Update a task by id
 *   tags: [Tasks]
 *   parameters:
 *     - $ref: '#/components/schemas/taskid'
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema: 
 *          $ref: '#/components/schemas/Task'
 *   responses:
 *    200:
 *      description: Task updated 
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: '#/components/schemas/Task'
 *    400:
 *      description: Task not found
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: '#/components/schemas/TaskNotFound'
 */

router.put("/tasks/:id", updateTask);

export default router;
