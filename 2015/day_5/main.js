import fs from 'fs'

const input = fs.readFileSync("./input.txt", "utf8").split('\n')

// at least three vowels
// double letter
// none of the following: ab, cd, pq, or xy

// pair of non-overlapping letters  /(..)(?:[a-z]*)\1{1,}/g
// letter that repeats with one letter inbetween

let niceStrings = 0;

for (const string of input) {
  // if (string.includes('ab') || string.includes('cd') || string.includes('pq') || string.includes('xy')) {
  //   console.log(string + ' failed test 1') 
  //   continue;
  // } 
  // if (string.match(/(.)\1+/g) === null ) {
  //   console.log(string + ' failed test 2') 
  //   continue;
  // }
  // if (string.match(/(\w*[aeuio]\w*){3,}/g) === null ) {
  //   console.log(string + ' failed test 3')
  //   continue;
  // } 
  
  if (string.match(/(..)(?:[a-z]*)\1{1,}/g) === null ) {
    console.log(string + ' failed test 1') 
    continue;
  }
  if (string.match(/(.)(?:[a-z])\1{1,}/g) === null ) {
    console.log(string + ' failed test 2')
    continue;
  } 

  niceStrings += 1
}

console.log(niceStrings)

