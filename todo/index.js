const express = require("express")
const app = express()
app.use(express.json())

let initialTodo = [{title:"HTML",isCompleted:true,id:1},{title:"javascript",isCompleted:true,id:2},{title:"React",isCompleted:false,id:3}]

app.get("/",(req,res)=>{
    res.status(200).send("welcome to the todo api")
})

app.get("/todos",(req,res)=>{
    res.status(200).send(req.body)
})

app.post("/addtodo",(req,res)=>{
    let newtodo = {
        title : req.body.title,
        id:initialTodo.length+1
    }
    console.log(newtodo)
    initialTodo.push(newtodo)
    res.status(200).send(newtodo)
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
        res.status(200).send(initialTodo[index]=req.body)
    }
})

app.delete("/delete/:id",(req,res)=>{
    let {id}=req.params
    let del = initialTodo.filter((initialTodo)=>initialTodo.id == id)
    console.log(del);
    res.status(200).send(...del)
})

app.get("/todo/:id",(req,res)=>{
    let {id}=req.params
    if(id>0){
        let data=initialTodo.filter((initialTodo)=>initialTodo.id==id)
        console.log(data)
        res.status(200).send(data)
    }
    else{
        res.status(200).send("User not exist")
    }
})

app.listen(8090,()=>{
    console.log("Server is Running on Port 8090..")
})