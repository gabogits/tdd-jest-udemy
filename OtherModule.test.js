jest.mock('./SomeClass'); // this happens automatically with automocking
const SomeClass = require('./SomeClass');
const mMock = jest.fn();
SomeClass.mockImplementation(() => {
  return {
    m: mMock,
  };
});
describe('post post', () => {
  it('create a new post', async () => {
    const some = new SomeClass();
    some.m('a', 'b');
    console.log('Calls to m: ', mMock.mock);
    console.log('Calls to m: ', mMock.mock.calls);
  });
});

