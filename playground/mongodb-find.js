const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a1cbde39c231d29c61cc8ee')
    // }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // }).then( ()=>{
    //     db.close();
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);        
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // }).then( ()=>{
    //     db.close();
    // });

    db.collection('Users')
        .find( {name:'Bill'} )
        .toArray()
        .then( (res) => {
            console.log(JSON.stringify(res, undefined, 2));
        }, (err) => {
            console.log('Unable to retreive user with name: Will');
        })
        .then( () => db.close());

    //db.close();
});