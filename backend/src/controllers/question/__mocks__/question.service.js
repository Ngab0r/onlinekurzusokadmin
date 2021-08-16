const questionService = jest.mock('./question.service');

let mockData;

questionService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(p => p.id === id))
);

questionService.__setMockData = data => mockData = data;

module.exports = questionService;
