var assert = require("assert")
var lib = require("../module/lib")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(0,[1,2,3].indexOf(1));
    })
  })
})
describe('module', function () {
	describe('maxNum',function(){
		it('maxNum should success', function (){
			assert.equal(10, lib.maxNum(5,10));
			assert.equal(2, lib.maxNum(2,1));
		});
	})
});