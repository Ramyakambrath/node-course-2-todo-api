//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('unable to connect to Mongodb server');
   }

   console.log('Connected to Mongo Server');
   const db=client.db('TodoApp');


  //  db.collection('Todos').findOneAndUpdate({
  //    _id:new ObjectID('5ae32184d2abf1dc81e11ce9')
  //  },{
  //    $set:{
  //      completed:true
  //    }
  //  },{
  //    returnOriginal: false
  //  }).then((result)=>{
  //    console.log(result);
  //  })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae1c69f517fd74cf41b959b')
  },{
    $set:{name:'Ramya'},
    $inc:{age: 28}
  },{returnOriginal:false}).then((result)=>{
    console.log(result)
  })
//  client.close();

});