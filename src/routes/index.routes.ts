import { Router } from "express";
import { getTasks } from "../controllers/tasks.cotroller";
const router = Router()


router.get('/tasks', getTasks)

router.get('/tasks/count', (req, res) => {
    res.send('Hello')
})
router.post('/tasks', (req, res) => {
    res.send('Hello')
})
router.get('/tasks/:id', (req, res) => {
    res.send('Hello')
})
router.delete('/tasks/:id', (req, res) => {
    res.send('Hello')
})
router.put('/tasks/:id', (req, res) => {
    res.send('Hello')
})



export default router