// 메모리 상에서 고정된 사이즈의 메모리 덩어리
// 숫자의 배열
// 데이터의 있는 바이트 그 자체를 가리킴

const buf = Buffer.from('hi')
console.log(buf) //유니코드로 출력
console.log(buf.length)
console.log(buf[0]) //아스키 코드로 출력
console.log(buf[1])
console.log(buf.toString())

//create
const buf2 = Buffer.alloc(2) //사이즈가 2개인 buffer를 만듬-> 초기화
const buf3 = Buffer.allocUnsafe(2) //초기화 하지 않음. 더 빠를 수
console.log(buf2, buf3)

buf2[0] = 72
buf2[1] = 105 //아스키 코드로 할당
console.log(buf2.toString()) // Hi

buf2.copy(buf3) // buf2 -> copy -> buf2
console.log(buf3.toString()) // Hi

//concat
const newBuf = Buffer.concat([buf, buf2, buf3])
console.log(newBuf.toString())
