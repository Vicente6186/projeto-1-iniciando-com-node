import Task from "@models/Task"
import { Request } from "@customTypes/index"
import { IncomingMessage, ServerResponse } from 'node:http'
import database from "src/database"

const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: async (request: Request, response: ServerResponse) => {
            const { title, description } = request.body
            const task = new Task(title, description)
            database.store('tasks', task)
            response.setHeader('status', 201).end()

        },
    },
    {
        method: 'GET',
        path: '/tasks',
        handler: async (request: Request, response: ServerResponse) => {
            const filters = request.body
            const tasks = database.index('tasks', filters)
            response.end(JSON.stringify(tasks))
        },
    },
    {
        method: 'GET',
        path: '/tasks/:id',
        handler: async (request: Request, response: ServerResponse) => {
            const { id } = request.params
            const task = database.show('tasks', id)
            response.end(JSON.stringify(task))
        },
    },
    {
        method: 'PUT',
        path: '/tasks/:id',
        handler: async (request: Request, response: ServerResponse) => {
            const { id } = request.params
            const { title, description, completed_at } = request.body
            const task = database.show('tasks', id)
            task.title = title
            task.description = description
            task.updated_at = new Date()
            if (completed_at) task.completed_at = new Date()
            response.end(JSON.stringify(task))
        }
    },
    {
        method: 'DELETE',
        path: '/tasks/:id',
        handler: async (request: Request, response: ServerResponse) => {
            const { id } = request.params
            database.destroy('tasks', id)
            response.setHeader('status', 204).end()
        },
    }
]

export default routes