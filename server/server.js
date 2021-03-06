var express= require('express');
var bodyParser=require('body-parser');

var {mongoose}= require('./db/mongoose');
var{Todo}=require('./models/todo');
var{User}=require('./models/user');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  // console.log(req.body);

  var todo = new Todo({
      text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})

app.get('/todos',(req,res)=>{
    Todo.find().then((todo)=>{
        res.send({todo})
    },(e)=>{
        res.status(400).send(e)
    })
})

app.listen(8070,()=>{
    console.log('Started on port 8070')
})

module.exports={app};

// var newUser= new User({
//     email:'     '
// })

// newUser.save().then((doc)=>{
//     console.log('saved user',doc)
// },(e)=>{
//     console.log('Unable to save the user',e)
// })
// var newTodo= new Todo({
//     text:'Cook dinner'
// })

// newTodo.save().then((docs)=>{
//   console.log('Saved Todo',docs)
// },(e)=>{
//     console.log('Unable to save Todo')
// })

// var allnewTodo= new Todo({
//     text: '   its evening  '
//     }
// )

// allnewTodo.save().then((docs)=>{
//     console.log('Saved Todo',docs)
// },(e)=>{
//     console.log('Unable to save Todo',e)  
// })