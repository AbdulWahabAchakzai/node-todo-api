var expect = require("expect");
var request = require('supertest');

var {
    app
} = require('./../server');
var {
    Todo
} = require('./../models/todo.js');

const todos = [{
    text: 'First test todo'
}, {
    text: 'Second test todo'
}];

// beforEach allows us to execute code before each test case
beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

/* in the below code we assume that there is no todo in database, which is a wrong approach.
for such case we need to write script to remove all todos from database, which is writen exactly
above "beforeEach" */
describe('P0ST/todos', () => {
    it('Should create new todo', (done) => {
        var text = 'test text todo';

        request(app)
            .post('/todos')
            .send({
                text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err) => {
                if (err) {
                    return done(err);
                }

                // testing code for database
                Todo.find({
                    text
                }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));


            });
    });
    it('Should not create todo with invalid body data', (done) => {
        request(app)
            .post('todos')
            .send({})
            .expect(400)
            .end((err) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then(() => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});


describe('GET/todos', () => {
    it('Should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});