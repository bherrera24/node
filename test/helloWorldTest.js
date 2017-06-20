var helloWorld = require('../helloWorld')
var expect = require('chai').expect

describe('helloWorld', function () {
  it('has a public method run', function () {
    expect(helloWorld.run).to.be.an.instanceof(Function)
  })
})
