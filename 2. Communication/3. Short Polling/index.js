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

let data = "Initial Data"


app.get('/',(req,res)=>{
    res.sendFile(_dirName +"/index.html")
})

app.get('/get',(req,res)=>{
    res.send({
        data
    })
})

app.get('/update',(req,res)=>{
    data = data + Math.floor(Math.random() * 10)
    res.send({
        data
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port: ", 3000)
})