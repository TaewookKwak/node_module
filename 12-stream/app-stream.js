const fs = require('fs')
const readStream = fs.createReadStream('./file.txt', {
  //   highWaterMark: 8, // 기본은 64kbytes
  //   encoding: 'utf-8',
})
const data = []
// highWaterMark : buffer 사이즈를 결정한다. 스트림이 한번에 얼마나 가져올지 결정한다
readStream.on('data', (chunk) => {
  //   console.log(chunk)
  data.push(chunk)
  console.count('data') // data 카운트
})

readStream.on('end', () => {
  console.log(data.join(''))
}) //end event 발생하면 data 배열들을 join으로 묶어준다

readStream.on('error', (error) => {
  console.log(error)
}) //error event 발생하면 error 출력

// on 은 자기 자신을 리턴하기 때문에, 그냥 .on().on()... 으로 체이닝 해도 됌
