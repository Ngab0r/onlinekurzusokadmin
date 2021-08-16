const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const examsheetController = require('./examsheet.controller');
const examsheetService = require('./examsheet.service');

jest.mock('./examsheet.service');

describe("examsheet controler", () => {
    const mockData = [{
        "id": 1,
        "name": "info",
        "category": 0,
        "user": 1,
        "questions": 1,
    },
    {
        "id": 1,
        "name": "info 2",
        "category": 0,
        "user": 2,
        "questions": 2,
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        examsheetService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const EXAMSHEET_ID = 1;

        const request = mockRequest({
            params: {
                id: EXAMSHEET_ID
            }
        });

        return examsheetController.findOne(request, response, nextFunction)
            .then(() => {
                expect(examsheetService.findOne).toBeCalledWith(EXAMSHEET_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === EXAMSHEET_ID)
                );
            })
    });
});