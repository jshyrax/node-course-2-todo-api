const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [
    {
        id: "5a1f7db082ab43ac2df632cd",
        text: "first test todo"
    },
    {
        text: "second test todo"
    }
]

beforeEach( (done) => {
    Todo.remove({}).then( () => {
        return Todo.insertMany(todos);
    } ).then( () => done() );
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect( (res) => {
                expect(res.body.text).toBe(text);
            })
            .end( (err, res) => {
                if (err){
                    return done(err);
                }

                Todo.find({text}).then( (todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch( (err) => done(e) );
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end( (err, res) => {
                if (err){
                    return done(err);
                }

                Todo.find().then( (todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch( (err) => done(e) );
            });
    });
});

describe('GET /todos', () => {
    it('should create all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect( (res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });

    it('should get a todo', (done) => {
        request(app)
            .get('/todos/5a1f7db082ab43ac2df632cd')
            .expect(200)
            .expect( (res) => {
                expect(res.body.todos.length).toBe(1);
            })
            .end(done);
    });
})