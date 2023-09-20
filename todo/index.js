const express = require("express")
const app = express()
app.use(express.json())

let initialTodo = [{title:"HTML",isCompleted:true,id:1},{title:"javascript",isCompleted:true,id:2},{title:"React",isCompleted:false,id:3}]

app.get("/",(req,res)=>{
    res.send("welcome to the todo api")
})

app.get("/todos",(req,res)=>{
    res.send(req.body)
})

app.post("/addtodo",(req,res)=>{
    let newtodo = {
        title : title
    }
    console.log(req.body)
    res.send(req.body)
})

app.patch("/update/:id",(req,res)=>{
    let {id} = req.params
    let index = initialTodo.findIndex((initialTodo) => initialTodo.id == id)

    if(index==-1){
        res.status(404).send("Id not Found.")
    }
    else{
        initialTodo[index]=req.body
        console.log(initialTodo[index]=req.body);
        res.send(initialTodo[index]=req.body)
    }
})

app.delete("/delete/:id",(req,res)=>{
    res.send(req.body)
})

app.listen(8090,()=>{
    console.log("Server is Running on Port 8090..")
})