export default class Task {
    id: number
    title: string
    description: string
    completed_at: Date | null
    created_at: Date
    updated_at: Date

    constructor(title: string, description: string) {
        this.title = title
        this.description = description
        this.completed_at = null
        this.created_at = new Date()
        this.updated_at = new Date()
    }

    
}
