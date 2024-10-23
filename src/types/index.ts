import { IncomingMessage } from "http"

export type Request = IncomingMessage & {
    body: any,
    params: any,
    query: any,
}