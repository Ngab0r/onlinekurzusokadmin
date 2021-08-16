const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const paymentController = require('./payment.controller');
const paymentService = require('./payment.service');

jest.mock('./payment.service');

describe("payment controler", () => {
    const mockData = [{
        "id": 1,
        "user": 1,
        "money": 15000,
    },
    {
        "id": 2,
        "user": 2,
        "money": 12000,
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        paymentService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const PAYMENT_ID = 1;

        const request = mockRequest({
            params: {
                id: PAYMENT_ID
            }
        });

        return paymentController.findOne(request, response, nextFunction)
            .then(() => {
                expect(paymentService.findOne).toBeCalledWith(PAYMENT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === PAYMENT_ID)
                );
            })
    });
});