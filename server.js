// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

var todoList = [
      {id: 1, work: 'Rửa bát'},
      {id: 2, work: 'Nấu cơm'},
      {id: 3, work: 'Lau nhà'},
      {id: 4, work: 'Học code trên CodersX'}
    ]

app.set('view engine', 'pug');
app.set('views','./views');

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todo", (req, res) => {
  res.render('todos',{
    todoList:todoList
  })
})

app.get("/todo/search", (req, res) => {
  var q = req.query.q;
  var match = todoList.filter(function(todo){
     return todo.work.toLowerCase().indexOf(q.toLowerCase()) !==-1;
});
  res.render('todos',{
    todoList:match
  });
  })
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
