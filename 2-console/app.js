console.log('hello')
console.clear()

//log level

console.log('log')
console.info('info')
console.warn('warn')
console.error('error')

// assert

console.assert(2 === 3, 'not same')
console.assert(2 === 2, 'sam')

// print object

const student = { name: 'ellie', age: 20 }
console.log(student)
console.table(student)
console.dir(student)

// measering time
console.time('for loop')
for (let i = 0; i < 10; i++) {
  i++
}
console.timeEnd('for loop')

// counting

function a() {
  console.count('how many time have a function called?')
}
a()
a()
console.countReset('how many time have a function called?')
a()

//trace

function f1() {
  f2()
}
function f2() {
  f3()
}
function f3() {
  console.log('f3')
  console.trace()
}
f1()
