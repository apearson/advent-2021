import fs from "fs/promises";

async function part1() {
  const fileData = await fs.readFile("./data/data1.txt");

  const data = fileData
    .toString()
    .split("\n")
    .map((n) => parseInt(n));

  let previousNumber = data.shift() ?? 0;
  let numOfIncrease = 0;

  data.forEach((d) => {
    console.log("Working with", previousNumber, d);

    if (previousNumber < d) {
      console.log(`${d} is larger than ${previousNumber}`);
      numOfIncrease++;
    }

    previousNumber = d;
  });

  console.log("Number of Increases", numOfIncrease);
}

async function part2() {
  const fileData = await fs.readFile("./data/data1.txt");

  const data = fileData
    .toString()
    .split("\n")
    .map((n) => parseInt(n));

  let previousNumber = data[0] + data[1] + data[2];
  let numOfIncrease = 0;

  for (let i = 3; i < data.length; i++) {
    const currentNumber = data[i - 2] + data[i - 1] + data[i];
    console.log("Working with", previousNumber, currentNumber);

    if (previousNumber < currentNumber) {
      console.log(`${currentNumber} is larger than ${previousNumber}`);
      numOfIncrease++;
    }

    previousNumber = currentNumber;
  }

  console.log("Number of Increases", numOfIncrease);
}

part2();

// part1();
