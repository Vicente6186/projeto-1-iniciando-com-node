import Task from "@models/Task"
import { IncomingMessage, ServerResponse} from 'node:http'	
import database from "src/database"

const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: async (request: Request, response: ServerResponse) => {
            const { title, description } = request.body as {[key: string]: any}
            const task = new Task(title, description)
            database.store('tasks',  task)
            response.setHeader('status', 201).end()

        },
    },
    {
        method: 'GET',
        path: '/tasks'
        handler: async (request: Request, response: ServerResponse) => {}
]