require('babel-polyfill')

var request = require('superagent')
var co = require('co')
var fun1G = function*(){
  var p, q ,r, res
  res = yield Promise.all([
    request.get('http://localhost:8080')
  , request.get('http://localhost:8080')
  ])
  p = res[0].text
  q = res[1].text
  res = yield request.get('http://localhost:8080'+q)
  r = res.text
  console.log(p+q+r)
  return 42
}

co(function*(){
  var data = yield co(fun1G).catch(function(){return "perdu"})
  console.log("done "+data)
})
