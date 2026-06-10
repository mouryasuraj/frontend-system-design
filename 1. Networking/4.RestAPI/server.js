import express from 'express'


const app = express();
const PORT = 5000

app.use(express.json()) // This is a middleware, which is used to parse the request body. without this we will get request body as undefined. We can use third party library also (body parser)

const data = [
    {
        id:1,
        name:"Suraj Mourya"
    }
]

app.get("/",(req,res)=>{
    console.log("Request", req);
    console.log("Response", res);
    res.json({data})
})


app.post("/new",(req,res)=>{
    const reqBody = req.body
    data.unshift(reqBody)
    res.json({data})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})