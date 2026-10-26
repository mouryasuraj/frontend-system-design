import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const _fileName = fileURLToPath(import.meta.url) // fileUrlToPath is used to convert the file URL to a path string, which is necessary because import.meta.url returns a URL object, and we need a string path for file operations.
console.log(import.meta.url) 
console.log(_fileName)
const _dirName = path.dirname(_fileName)
console.log(_dirName)


const app = express();
app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(_dirName +"/index.html")
})

app.get('/sse',(req,res)=>{
    // Need to setup long live connection and and how data is send to client using events


    res.setHeader("Content-Type","text/event-stream")
    res.setHeader("Connection","alive")
    res.setHeader("Cache-Control","no-cache")

    res.write("data: welcome to data streaming \n \n ")

    const intervalId = setInterval(() => {
        res.write(`data: I'm streaning on time ${new Date().toLocaleDateString()} \n\n`)
    }, 5000);

    res.on('close', ()=>{
        console.log("I'm closing off")
        clearInterval(intervalId)
    })
})




app.listen(3000, ()=>{
    console.log("Server is running on port: ", 3000)
})