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
let waitingList = []

app.get('/',(req,res)=>{
    res.sendFile(_dirName +"/index.html")
})

app.get('/get',(req,res)=>{
    if(data !== req.query.latestData){
        res.json({data})
    }else{
        waitingList.push(res)
    }
    
})


app.get('/update',(req,res)=>{
    data = req.query.newData

    while(waitingList.length>0){
        const client = waitingList.pop()
        client.json({data})
    }

    res.send({message:"Data updated Successfully"})

})

app.listen(3000, ()=>{
    console.log("Server is running on port: ", 3000)
})