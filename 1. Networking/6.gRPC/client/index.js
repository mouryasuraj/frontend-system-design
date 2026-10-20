import express from "express";
import client from "./client.js";


const app = express();

app.use(express.json());


app.get("/", (req, res) =>{
  client.getAll(null, (err, data)=>{
    res.json(data)
  })
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});