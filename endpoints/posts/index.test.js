const request = require('supertest');
const app = require('../../server');

describe('server', () => {
  describe('endpoints', () => {
    describe('post post', () => {
      it('create a new post', async () => {
        const response = await request(app) //hay que entregarle app a super post para que pueda hacer la prueba
          .post('/')
          .send({ userId: 5 })
          .set('user_id', 1) //setearle las cabeceras y headers
          .set('Content-Type', 'application/json'); //setearle las cabeceras y headers

        //console.log(response)

        expect(response.statusCode).toEqual(201);
        expect(response.body.userId).toEqual(5);
        expect(response.body).toHaveProperty('id');
      }, 15000)
      it('does not create a new post', async () => {
        const response = await request(app) //hay que entregarle app a super post para que pueda hacer la prueba
          .post('/')
          .send({ userId: 100 })
          .set('user_id', 1) //setearle las cabeceras y headers
          .set('Content-Type', 'application/json'); //setearle las cabeceras y headers

        //console.log(response)

        expect(response.statusCode).toEqual(500);

      }, 25000)

    })
  })

})