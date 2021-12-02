import fs from "fs/promises";

async function part1() {
  const fileData = await fs.readFile("./data/data2.txt");

  const data = fileData
    .toString()
    .split("\n")
    .map((n) => n.split(" "));

  let horPos = 0;
  let vertPos = 0;

  data.forEach((a) => {
    const direction = a[0];
    const amount = parseInt(a[1]);

    direction === "forward"
      ? (horPos += amount)
      : direction === "down"
      ? (vertPos += amount)
      : direction === "up"
      ? (vertPos -= amount)
      : console.log("I don't know what I'm doing");
  });

  console.log("Hor Pos", horPos);
  console.log("Vert Pos", vertPos);
}

async function part2() {
  const fileData = await fs.readFile("./data/data2.txt");

  const data = fileData
    .toString()
    .split("\n")
    .map((n) => n.split(" "));

  let horPos = 0;
  let vertPos = 0;
  let aim = 0;

  data.forEach((a) => {
    const direction = a[0];
    const amount = parseInt(a[1]);

    if (direction === "up") {
      aim -= amount;
    } else if (direction === "down") {
      aim += amount;
    } else if (direction === "forward") {
      horPos += amount;
      vertPos += aim * amount;
    } else {
      console.log("I don't know what I'm doing");
    }
  });

  console.log("Hor Pos", horPos);
  console.log("Vert Pos", vertPos);
  console.log("Final Answer", horPos * vertPos);
}

part2();
