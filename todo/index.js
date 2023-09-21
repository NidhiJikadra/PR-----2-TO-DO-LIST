const express = require("express");
const app = express();
app.use(express.json());

let initialTodo = [
  { title: "HTML", isCompleted: true, id: 1 },
  { title: "javascript", isCompleted: true, id: 2 },
  { title: "React", isCompleted: false, id: 3 },
];

app.get("/", (req, res) => {
  res.status(200).send("welcome to the todo api");
});

app.get("/todos", (req, res) => {
  console.log(initialTodo);
  res.status(200).send(initialTodo);
});

app.post("/addtodo", (req, res) => {
  const newtodo = req.body;
  newtodo.id = initialTodo.length + 1;
  console.log(newtodo);
  initialTodo.push(newtodo);
  res.status(200).send(newtodo);
});

app.patch("/update/:id", (req, res) => {
  let { id } = req.params;
  let index = initialTodo.findIndex((initialTodo) => initialTodo.id == id);

  if (index == -1) {
    res.status(404).send("Id not Found.");
  } else {
    initialTodo[index] = req.body;
    console.log((initialTodo[index] = req.body));
    res.status(200).send((initialTodo[index] = req.body));
  }
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  const index = initialTodo.findIndex((initialTodo) => initialTodo.id == id);
  let deletedTodo = initialTodo.splice(index, 1)[0];
  console.log(deletedTodo);
  res.send({ deletedTodo: deletedTodo });
});

app.get("/todo/:id", (req, res) => {
  let id = req.params.id;
  let data = initialTodo.filter((initialTodo) =>initialTodo.id==id);
    console.log("test",...data);
  res.status(200).send(...data);

//   if (id == initialTodo.id) {
//     console.log(data);
//     // let bool = Number(id)
//   } else {
//     console.log("User not exist");
//     res.status(404).send("User not exist");
//   }
});

app.get("/findbystatus", (req, res) => {
  let status = req.query.isCompleted;
  console.log(status);
  let bool = status === "true";
  if (status == "true") {
    const a = initialTodo.filter(
      (initialTodo) => initialTodo.isCompleted == bool
    );
    res.send(a);
  } else if (status == "false") {
    const b = initialTodo.filter(
      (initialTodo) => initialTodo.isCompleted == bool
    );
    res.send(b);
  }
});

app.listen(8090, () => {
  console.log("Server is Running on Port 8090..");
});
