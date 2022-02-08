let num = 1
const interval = setInterval(() => {
  console.log(num++)
}, 1000)

const finishInterval = setInterval(() => {
  console.log('timeout!')
  clearInterval(interval)
  clearInterval(finishInterval)
}, 6000)
