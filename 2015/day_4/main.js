import crypto from 'crypto'


const input = 'yzbqklnj'
// let inputNum = 282749
let inputNum = 0

let md5 = crypto.createHash('md5').update(`${input}${inputNum}`).digest('hex')


while (md5.slice(0,5) !== '00000') {
  console.log(inputNum)
  md5 = crypto.createHash('md5').update(`${input}${inputNum}`).digest('hex')
  inputNum += 1
}

console.log(md5)
console.log('The Answer is:-')
console.log(inputNum - 1)
