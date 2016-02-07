'use strict';

var app = require('../..');
import request from 'supertest';

var newIncomingSMS;

describe('IncomingSMS API:', function() {

  describe('GET /api/incomingSMS', function() {
    var incomingSMSs;

    beforeEach(function(done) {
      request(app)
        .get('/api/incomingSMS')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          incomingSMSs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      incomingSMSs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/incomingSMS', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/incomingSMS')
        .send({
          name: 'New IncomingSMS',
          info: 'This is the brand new incomingSMS!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newIncomingSMS = res.body;
          done();
        });
    });

    it('should respond with the newly created incomingSMS', function() {
      newIncomingSMS.name.should.equal('New IncomingSMS');
      newIncomingSMS.info.should.equal('This is the brand new incomingSMS!!!');
    });

  });

  describe('GET /api/incomingSMS/:id', function() {
    var incomingSMS;

    beforeEach(function(done) {
      request(app)
        .get('/api/incomingSMS/' + newIncomingSMS._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          incomingSMS = res.body;
          done();
        });
    });

    afterEach(function() {
      incomingSMS = {};
    });

    it('should respond with the requested incomingSMS', function() {
      incomingSMS.name.should.equal('New IncomingSMS');
      incomingSMS.info.should.equal('This is the brand new incomingSMS!!!');
    });

  });

  describe('PUT /api/incomingSMS/:id', function() {
    var updatedIncomingSMS;

    beforeEach(function(done) {
      request(app)
        .put('/api/incomingSMS/' + newIncomingSMS._id)
        .send({
          name: 'Updated IncomingSMS',
          info: 'This is the updated incomingSMS!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedIncomingSMS = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedIncomingSMS = {};
    });

    it('should respond with the updated incomingSMS', function() {
      updatedIncomingSMS.name.should.equal('Updated IncomingSMS');
      updatedIncomingSMS.info.should.equal('This is the updated incomingSMS!!!');
    });

  });

  describe('DELETE /api/incomingSMS/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/incomingSMS/' + newIncomingSMS._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when incomingSMS does not exist', function(done) {
      request(app)
        .delete('/api/incomingSMS/' + newIncomingSMS._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
