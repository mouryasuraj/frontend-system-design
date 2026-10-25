import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import {Server} from "socket.io"
import { createServer } from 'http'

const _fileName = fileURLToPath(import.meta.url) // fileUrlToPath is used to convert the file URL to a path string, which is necessary because import.meta.url returns a URL object, and we need a string path for file operations.
console.log(import.meta.url) 
console.log(_fileName)
const _dirName = path.dirname(_fileName)
console.log(_dirName)


const app = express();

const server = createServer(app)
const io = new Server(server)

app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(_dirName +"/index.html")
})

io.on('connection', (socket)=>{
    console.log("Connection established")

    socket.on("chat message", (msg)=>{
        console.log("message recieved: ", msg)
        io.emit("chat message", msg)
    })

    io.on('disconnect', () =>{
        console.log("Connection closed")
    })
})


server.listen(3000, ()=>{
    console.log("Server is running on port: ", 3000)
})