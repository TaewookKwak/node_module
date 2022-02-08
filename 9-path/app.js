const path = require('path')

// 운영체제 별로 구분자 등으로 파일 경로 표기 법이 다를 수 있다.
// 그러니 path를 잘 쓰자.

console.log(__dirname)
console.log(__filename)

console.log(path.sep)
console.log(path.delimiter)

console.log(path.basename(__filename))
console.log(path.basename(__filename, '.js'))

console.log(path.dirname(__filename))
console.log(path.extname(__filename))

const parsed = path.parse(__filename)
console.log(parsed)

const str = path.format(parsed)
console.log(str)

//isAbsolute
console.log('isAbs', path.isAbsolute(__dirname))
console.log('isAbs', path.isAbsolute('../'))

//normalize
console.log(path.normalize('./folder/////sib'))

//join
console.log(__dirname + path.sep + 'image')
console.log(path.join(__dirname, 'image'))
