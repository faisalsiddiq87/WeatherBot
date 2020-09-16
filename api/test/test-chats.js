process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
let should = chai.should();

describe('Chats', () => {
  /*
    * Test the /GET route
  */
  describe('/GET chats/findAll', () => {
      it('it should GET all the chats', (done) => {
        chai.request(server)
            .get('/chats/findAll')
            .end((err, res) => {
              res.should.have.status(200);
              res.text.should.be.a('string');
              done();
            });
      });
  });

  /*
    * Test the /POST create chat route
  */

  describe('/POST Chat', () => {
    it('it should create a chat', (done) => {
        let chat = {
          session_id: "b7c73185-2d23-4d8b-9d07-7dbd60b43422",
          query: "Lahore",
          reply: "Weather in Lahore is like 36℃ with haze",
        }
      chai.request(server)
      .post('/chats/create')
      .send(chat)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Chat Created successfully");
        done();
      });
    });
  });

  /*
    * Test the /GET Chat route connected to chat widget
  */
  describe('/GET chats', () => {
    it('it should show chat bot output', (done) => {
      chai.request(server)
        .get('/chats?q=lahore')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.a('string');
          done();
        });
    });
  });

});