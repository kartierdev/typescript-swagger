import { Handler } from "express"
import { getConnection } from "../db"
import { nanoid } from "nanoid"

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value()
    return res.json(data)
}

export const createTasks: Handler = (req, res) => {
    const {name, description} = req.body

    const newTask = {
        name,
        description,
        id: nanoid()
    }
    res.json(newTask)
}

