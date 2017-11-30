const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = '5a1f7db082ab43ac2df632cd';
//var id = '5a1f7db082ab43ac2df632cd11';

// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('todo', todo);
// });

// if (!ObjectID.isValid(id)){
//     return console.log('Id not valid');
// }

// Todo.findById(id).then( (todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('todo by id', todo);
// }).catch( (e) => console.log(e) );


User.findById('5a1f69fb30140ccc21be439d').then( (user) => {
    if (!user){
        return console.log('user not found');
    }
    console.log('user by id', user);
}).catch( (e) => console.log(e));
