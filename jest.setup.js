require('jest-fetch-mock').enableMocks();

window.scrollTo = jest.fn();

// beforeEach(() => {
//     // if you have an existing `beforeEach` just add the following line to it
//     fetchMock.doMock()
//   })