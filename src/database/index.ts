export default class Database {
    
    database: { [key: string]: Array<any> }

    constructor() {
        this.database = {
            tasks: []
        }
    }

    create(tableName: string, item: any) {
        const table = this.database[tableName]
       if(Array.isArray(table)) {
           this.database[tableName].push(item)
       }
    }
}