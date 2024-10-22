import Task from "@models/Task"
import { IncomingMessage, ServerResponse} from 'node:http'	

const routes = [
    {
        method: 'POST',
        path: '/tasks',
        handler: async (request: IncomingMessage, response: ServerResponse) => {
            const { title, description } = request.body
            const task = new Task(title, description)
            response.end(JSON.stringify(task))

        }
    }
]