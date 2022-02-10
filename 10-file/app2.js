const fs = require('fs').promises

//read a file

fs.readFile('./text.txt')
  .then((data) => console.log(data)) // Buffer로 찍힘
  .catch(console.error)

fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data)) // 인코딩 된 text 찍힘
  .catch(console.error)

// write a file
fs.writeFile('./file.txt', 'hello dream coder') //
  .catch(console.error)
// 덮어쓰기
fs.writeFile('./file.txt', 'yo dream coder') //
  .catch(console.error)
// 기존 파일에 텍스트 추가
fs.appendFile('./file.txt', 'hello dream coder') //
  .catch(console.error)

// 복사 Clone
fs.appendFile('./file.txt', 'hello dream coder') //
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt').catch(console.error)
  })
  .catch(console.error)

//folder
fs.mkdir('./sub-Folder').catch(console.error)

fs.readdir('./') //
  .then(console.log)
  .catch(console.error)
