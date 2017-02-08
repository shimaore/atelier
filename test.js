require('babel-polyfill')

var request = require('superagent')
var co = require('co')
var fun1G = function*(){
  var p, q ,r, res
  res = yield request.get('http://localhost:8080')
  p = res.text
  res = yield request.get('http://localhost:8080')
  // .catch(function(){ return null })
  // if(!res) return 67
  q = res.text
  res = yield request.get('http://localhost:8080')
  r = res.text
  console.log(p+q+r)
  return 42
}

co(function*(){
  var data = yield co(fun1G).catch(function(){return "perdu"})
  console.log("done "+data)
})
