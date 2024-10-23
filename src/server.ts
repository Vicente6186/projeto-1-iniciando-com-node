import http from 'node:http'
import routes from '@routes/index'

const server = http.createServer((request, response) => {  
    const { method, url } = request     
    const route = routes.find(route => route.method === method && route.path === url)                

    if(method === 'POST' && url === '') {
        
    }
})

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})