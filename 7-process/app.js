const process = require('process')

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.ppid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())

setTimeout(() => {
  console.log('setTimeout')
}, 0) //모든 콜스택 코드들을 다 완료하면, 마이크로 큐에 있는 콜스택을 처리함

process.nextTick(() => {
  console.log('nextTick')
}) // nextTick은 전에 있는 콜백들을 제쳐두고 앞으로가 먼저 처리됨
