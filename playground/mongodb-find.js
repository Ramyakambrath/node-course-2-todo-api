//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('unable to connect to Mongodb server');
   }

   console.log('Connected to Mongo Server');
   const db=client.db('TodoApp');

//    db.collection('Todos').find({_id:new ObjectID('5ae1c5053960542e0cf2a40c')}).toArray().then ((docs)=>{
//       console.log('Todos');
//       console.log(JSON.stringify(docs,undefined,2))
//    },(err)=>{
//        console.log('Unable to fetch Todos',err)
//    })

// db.collection('Todos').find().count().then ((count)=>{
//     console.log(`Todos count:${count}`);
    
//  },(err)=>{
//      console.log('Unable to fetch Todos',err)
//  })


db.collection('Users').find({name:'Ramya'}).toArray().then((docs)=>{
    console.log('Todo');
    console.log(JSON.stringify(docs,undefined,2))
},(err)=>{
    console.log('Unable to fetch Todos',err)
})
 //  client.close();

});