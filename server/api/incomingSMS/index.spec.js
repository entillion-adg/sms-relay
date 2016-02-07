'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var incomingSMSCtrlStub = {
  index: 'incomingSMSCtrl.index',
  show: 'incomingSMSCtrl.show',
  create: 'incomingSMSCtrl.create',
  update: 'incomingSMSCtrl.update',
  destroy: 'incomingSMSCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var incomingSMSIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './incomingSMS.controller': incomingSMSCtrlStub
});

describe('IncomingSMS API Router:', function() {

  it('should return an express router instance', function() {
    incomingSMSIndex.should.equal(routerStub);
  });

  describe('GET /api/incomingSMS', function() {

    it('should route to incomingSMS.controller.index', function() {
      routerStub.get
        .withArgs('/', 'incomingSMSCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/incomingSMS/:id', function() {

    it('should route to incomingSMS.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'incomingSMSCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/incomingSMS', function() {

    it('should route to incomingSMS.controller.create', function() {
      routerStub.post
        .withArgs('/', 'incomingSMSCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/incomingSMS/:id', function() {

    it('should route to incomingSMS.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'incomingSMSCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/incomingSMS/:id', function() {

    it('should route to incomingSMS.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'incomingSMSCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/incomingSMS/:id', function() {

    it('should route to incomingSMS.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'incomingSMSCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
