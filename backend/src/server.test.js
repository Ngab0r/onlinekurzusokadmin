const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const User = require('./models/user.model');
const { response } = require('express');

describe('REST API integration tests', () => {
    const insertData = [
        {
            firstName: 'John',
            lastName: 'Test',
            email: 'john@test.com'
        },
        {
            firstName: 'Kate',
            lastName: 'Test',
            email: 'kate@test.com'
        }
    ];

    beforeEach(done => {
        const { username, password, host } = config.get('database');
        mongoose
            .connect(`mongodb+srv://${username}:${password}@${host}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                done();
            })
            .catch(err => {
                logger.error(err);
                process.exit();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });

    test('GET /users', () => {
        return User.insertMany(insertData)
            .then(() => supertest(app).get('/users').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertData.length);

                response.body.forEach((user, index) => {
                    expect(user.firstName).toBe(insertData[index].firstName);
                    expect(user.lastName).toBe(insertData[index].lastName);
                    expect(user.email).toBe(insertData[index].email);
                });
            });

    });

    test('GET /users/:id', () => {
        let firstPostId;
        return User.insertMany(insertData)
            .then(people => {
                firstPostId = people[0]._id;
                return supertest(app).get(`/users/${firstPostId}`).expect(200);
            })
            .then(response => {
                const user = response.body;
                expect(user.firstName).toBe(insertData[0].firstName);
                expect(user.lastName).toBe(insertData[0].lastName);
                expect(user.email).toBe(insertData[0].email);
            });
    });
});
