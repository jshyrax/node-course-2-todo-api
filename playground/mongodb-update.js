const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').findOneAndUpdate({
//        _id : new ObjectID("5a1cc5319c231d29c61cc9f1")
//     }, {
//         $set: {
//             completed: false
//         }
//     }, { 
//         returnOriginal: false
//     }).then( (result) => {
//    });
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5a1cba3f331fac1ffc91b0ff")
    }, {
        $set: {
            name: "Jill"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });
    //db.close();
});