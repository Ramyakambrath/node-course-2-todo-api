//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('unable to connect to Mongodb server');
   }

   console.log('Connected to Mongo Server');
   const db=client.db('TodoApp');

//    db.collection('Todos').insertOne({
//        text:'Something to do',
//        completed:false
//    },(err,result)=>{
//        if(err){
//           return console.log('unable to insert todo',err)
//        }

//        console.log(JSON.stringify(result.ops,undefined,2))
//    })

db.collection('Users').insertOne({
    name:'Ramya',
    age: '33',
    location:'Lausanne'
},(err,result)=>{
    if(err){
        return console.log('Unable to insert Users',err)
    }

    console.log(JSON.stringify(result.ops,undefined,2))
})

   client.close();

});