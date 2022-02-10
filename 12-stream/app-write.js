const fs = require('fs')
const wrtieStream = fs.createWriteStream('./file3.txt')
wrtieStream.on('finish', () => {
  console.log('finished')
})

wrtieStream.write('heelo')
wrtieStream.write('world')
wrtieStream.end()
