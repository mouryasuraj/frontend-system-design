import express from 'express'


const app = express();
const PORT = 5000

app.use(express.json())
app.get("/",(req,res)=>{
    console.log("Request", req);
    console.log("Response", res);
    res.send("I'm up")
})


app.post("/new",(req,res)=>{
    const reqBody = req.body
    console.log(reqBody)

    res.json(reqBody)
})


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})