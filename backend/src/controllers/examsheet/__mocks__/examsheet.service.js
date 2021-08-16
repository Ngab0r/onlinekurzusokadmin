const examsheetService = jest.mock('./examsheet.service');

let mockData;

examsheetService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(p => p.id === id))
);

examsheetService.__setMockData = data => mockData = data;

module.exports = examsheetService;
