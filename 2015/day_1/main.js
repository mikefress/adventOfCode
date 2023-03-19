import fs from 'fs';

const input = fs.readFileSync("./input.txt", "utf8").trim()

const inputArray = input.split('')

let santasFloor = 0

let position;

inputArray.forEach((b, index) => {
  if (index === 0){
    console.log(index)
  }
  
  if (b === '(') {
    ++ santasFloor;
  } else {
    -- santasFloor;
  }

  if (position === undefined && santasFloor === -1) {
    position = index + 1
  }
})

console.log(position)
