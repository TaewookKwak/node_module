console.log('code1')
setTimeout(() => {
  console.log('settimeout 0')
}, 0)

console.log('code2')
setImmediate(() => {
  console.log('setImmediate')
})

console.log('code3')
process.nextTick(() => {
  console.log('nextTick')
})
