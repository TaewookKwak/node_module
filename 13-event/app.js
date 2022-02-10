const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('ellie', (args) => {
  console.log('first callbak -', args)
})

emitter.on('ellie', (args) => {
  console.log('second callbak -', args)
})

emitter.emit('ellie', { message: 1 })
emitter.emit('ellie', 'message: 2 ')
emitter.emit('ellie', { message: 3 })
