import fs from 'fs';

const input = fs.readFileSync("./input.txt", "utf8").trim()

const SantaPosition = {
  x: 0,
  y: 0
}

const RoboPosition = {
  x: 0,
  y: 0
}

const housesVisited = new Set();

housesVisited.add(`x${SantaPosition.x}y${SantaPosition.y}`)
housesVisited.add(`x${RoboPosition.x}y${RoboPosition.y}`)

for (let i = 0; i < input.length; i += 1) {
  if (i % 2 !== 0) {
    if (input[i] === '^') {
      SantaPosition.y += 1;
      housesVisited.add(`x${SantaPosition.x}y${SantaPosition.y}`);
    } else if (input[i] === '>') {
      SantaPosition.x += 1;
      housesVisited.add(`x${SantaPosition.x}y${SantaPosition.y}`);
    } else if (input[i] === 'v') {
      SantaPosition.y -= 1;
      housesVisited.add(`x${SantaPosition.x}y${SantaPosition.y}`);
    } else if (input[i] === '<') {
      SantaPosition.x -= 1;
      housesVisited.add(`x${SantaPosition.x}y${SantaPosition.y}`);
    } else {
      console.log('ERROR!')
      console.log(input[i])
      break;
    }
  } else {
    if (input[i] === '^') {
      RoboPosition.y += 1;
      housesVisited.add(`x${RoboPosition.x}y${RoboPosition.y}`);
    } else if (input[i] === '>') {
      RoboPosition.x += 1;
      housesVisited.add(`x${RoboPosition.x}y${RoboPosition.y}`);
    } else if (input[i] === 'v') {
      RoboPosition.y -= 1;
      housesVisited.add(`x${RoboPosition.x}y${RoboPosition.y}`);
    } else if (input[i] === '<') {
      RoboPosition.x -= 1;
      housesVisited.add(`x${RoboPosition.x}y${RoboPosition.y}`);
    } else {
      console.log('ERROR!')
      console.log(input[i])
      break;
    }
  }
}

console.log(housesVisited.size)


