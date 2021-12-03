import fs from "fs/promises";

type counter = {
  [key: string]: number;
};

async function part1() {
  console.time("part1");
  const fileData = await fs.readFile("./data/day3.txt");

  const bitStreams: counter[] = [];

  fileData
    .toString()
    .split("\n")
    .forEach((n) => {
      n.split("").forEach((b, i) => {
        if (!bitStreams[i]) {
          bitStreams[i] = { "0": 0, "1": 0 };
        }

        bitStreams[i][b] += 1;
      });
    });

  const gammaRateBinary = bitStreams
    .map((c) => {
      return c[0] > c[1] ? "0" : "1";
    })
    .join("");

  const epsilonRateBinary = bitStreams
    .map((c) => {
      return c[0] < c[1] ? "0" : "1";
    })
    .join("");

  const gammaRateParsed = parseInt(gammaRateBinary, 2);
  const epsilonRateParsed = parseInt(epsilonRateBinary, 2);

  console.log("Bit stream", JSON.stringify(bitStreams));
  console.log("Gamma Rate", gammaRateParsed, gammaRateBinary);
  console.log("Epsilon Rate", epsilonRateParsed, epsilonRateBinary);

  console.timeEnd("part1");
  console.log("Final Answer", epsilonRateParsed * gammaRateParsed);
}

part1();
