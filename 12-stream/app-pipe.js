const fs = require('fs')
const zlib = require('zlib') //압출 모듈

const readStream = fs.createReadStream('./file.txt')
const zlibStream = zlib.createGzip()
const wrtieStream = fs.createWriteStream('./file4.zip')
const piping = readStream.pipe(zlibStream).pipe(wrtieStream)
//readstrea을 읽으면서 writestream과 연결하여 데이터가 흘러감 (추가로 pipe 해서 압축)
piping.on('finish', () => {
  console.log('done') // 데이터가 다 흘러가면 호출됨
})
