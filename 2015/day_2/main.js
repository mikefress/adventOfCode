import fs from 'fs';

const input = fs.readFileSync("./input.txt", "utf8").trim()

const inputArray = input.split('\n')

let totalWrappingPaper = 0;
let totalRibbon = 0;

for (const input of inputArray) {
  const [l, w, h] = input.split('x').map(num => parseInt(num))
  const [lw, wh, hl] = [l*w, w*h, h*l]
  const [smallest, nextSmallest] = [l, w, h].sort((a, b) => a - b)
  
  // totalWrappingPaper += ((lw + wh + hl)*2 + smallest)

  const ribbon = smallest + smallest + nextSmallest + nextSmallest

  const bow = l*w*h

  totalRibbon += ribbon + bow

}

console.log(totalWrappingPaper)
console.log(totalRibbon)