 class Database {

    database: { [key: string]: Array<any> }

    constructor() {
        this.database = {
            tasks: []
        }
    }

    store(tableName: string, item: any) {
        const table = this.database[tableName]
        if (Array.isArray(table)) this.database[tableName].push(item)
        else this.database[tableName] = [item]
    }

    index(tableName: string, filters: any = {}) {
        const table = this.database[tableName]
        const result = table.filter(item => {  return Object.keys(filters).every(key => item[key] === filters[key]) })
        return result
    }

    show(tableName: string, id: string) {
        const table = this.database[tableName]
        const result = table.find(item => item.id === id)
        return result
    }

    update(tableName: string, id: string, item: any) {
        const table = this.database[tableName]
        const index = table.findIndex((item) => item.id === id)
        table[index] = item
    }

    destroy(tableName: string, id: string) {
        const table = this.database[tableName]
        table.findIndex((item) => item.id === id)
    }
}

export default new Database()