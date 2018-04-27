//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('unable to connect to Mongodb server');
   }

   console.log('Connected to Mongo Server');
   const db=client.db('TodoApp');

//    db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
//        console.log(result)
//    })

//    db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
//        console.log(result)
//    })

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);

// })

// db.collection('Users').deleteMany({name:'Ramya'}).then((result)=>{
//     console.log(result)
// })

db.collection('Users').findOneAndDelete({_id: new ObjectID('5ae32473d2abf1dc81e11eea')}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2))
})
  client.close();

});