function hello() {
  console.log(this) // globak
  console.log(this === global) // globak
}
hello()
console.clear()
class A {
  constructor(num) {
    this.num = num
  }
  memberFunction() {
    console.log('----class----')
    console.log(this)
    console.log(this === global)
  }
}

const a = new A(2)
a.memberFunction()

console.log('---global scope----')
console.log(this)
console.log(this === module.exports)
