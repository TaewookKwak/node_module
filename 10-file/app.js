const fs = require('fs')

// 3
// rename(파일경로, callback(error,data))
// try{ renameSync(파일경로)} catch(e){}
// promises.rename().then().catch()

// renameSync 지양하다

try {
  fs.renameSync('./text.txt', './text-new.txt')
} catch (error) {
  console.error(error)
}
console.log('im dead')

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error)
})
console.log('hello')

fs.promises
  .rename('./text2.txt', './text-new.txt') //
  .then(() => console.log('done'))
  .catch(console.error)
