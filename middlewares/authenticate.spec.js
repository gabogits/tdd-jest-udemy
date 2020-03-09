const authenticate = require('./authenticate')

describe('Middlewares', () => {
    describe('authenticate', () => {
        it('should have id 1', () => {
            const req = {
                header: jest.fn().mockReturnValue("1")
            };
            const res = {
                sendStatus: jest.fn()
            };
            const next = jest.fn();
            authenticate(req, res, next);
            //console.log(req)
            //console.log(req.header)
            //console.log(req.header.mock)
            expect(req.header.mock.calls).toEqual([
                ['user_id']
            ])
            expect(res.sendStatus.mock.calls).toEqual([])
            expect(next.mock.calls).toEqual([[]])
        })
        it('should fail if user is not equal to 1', () => {
            const req = {
                header: jest.fn().mockReturnValue("2")
            };
            const res = {
                sendStatus: jest.fn()
            };
            const next = jest.fn();
            authenticate(req, res, next);
            //console.log(req.header.mock.calls)
            expect(req.header.mock.calls).toEqual([
                ['user_id']
            ])
            expect(res.sendStatus.mock.calls).toEqual([[403]])
            expect(next.mock.calls).toEqual([])
        })
    })
})