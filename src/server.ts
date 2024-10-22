import http from 'node:http'

const server = http.createServer((request, response) => {  
    const { method, url } = request                     
    if(method === 'POST' && url === '') {
        
    }
})

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})