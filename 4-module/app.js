const counter = require('./counter')

console.clear()

counter.increase()
console.log(counter.getCount())
console.log(this)
