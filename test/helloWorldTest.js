var helloWorld = require('../helloWorld')
var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')
var expect = chai.expect
chai.use(sinonChai)

describe('helloWorld', function () {
  it('displays "Hello world"', function () {
    var consoleFake =  sinon.stub(console, 'log')
    helloWorld.run()
    consoleFake.restore()

    expect(consoleFake).to.have.been.calledOnce
    expect(consoleFake).to.have.been.calledWith('Hello world')
  })
})
