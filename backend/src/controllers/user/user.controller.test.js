const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const userController = require('./user.controller');
const userService = require('./user.service');

jest.mock('./user.service');

describe("user controler", () => {
    const mockData = [
        {
            "id": 1,
            "role": "admin",
            "email": "admin@gmail.com",
            "password": "$2a$10$dE9rlEMTdjHf.dyfwZmVWOx2huQ3mOygDt7nMcnvktRqxVeceyyOi",
            "firstName": "admin",
            "lastName": "admin"
        },
        {
            "id": 1,
            "role": "user",
            "email": "user@gmail.com",
            "password": "$2a$10$JpE7JHN/mwk1WVhmhxjtyecndyA7JHDtnhtqgcoPJc2W6PxQh6JyS",
            "firstName": "admin",
            "lastName": "admin"

        }
    ];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        userService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return userController.findOne(request, response, nextFunction)
            .then(() => {
                expect(userService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === USER_ID)
                );
            })
    });
});