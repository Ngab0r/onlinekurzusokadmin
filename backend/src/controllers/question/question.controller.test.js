const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const questionController = require('./question.controller');
const questionService = require('./question.service');

jest.mock('./question.service');

describe("question controler", () => {
    const mockData = [{
        "id": 1,
        "name": "Melyik állítás igaz a NoSQL adatbázisokra?<br><br>Válaszd ki az EGYETLEN megfelelő választ!",
        "answer": "1. Drága az üzemeltetése, 2. Összetett lekérdezések időigényesek, 3. Cak egy, választható típusú adatmodellt használhatunk, 4. Egy dokumentumhoz bármikor hozzáadhatok új tulajdonságot, függetlenül a többitől",
        "correctAnswer": [4],
        "type": 0,
        "attachment": 0,
        "active": true
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        questionService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const QUESTION_ID = 1;

        const request = mockRequest({
            params: {
                id: QUESTION_ID
            }
        });

        return questionController.findOne(request, response, nextFunction)
            .then(() => {
                expect(questionService.findOne).toBeCalledWith(QUESTION_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === QUESTION_ID)
                );
            })
    });
});