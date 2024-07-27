const draw = require('../common/draw.js');
const constants = require('../common/constants');
const utils = require('../common/utils.js');


const { createCanvas } = require("canvas");
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");


const fs = require("fs");

const filename = fs.readdirSync(constants.RAW_DIR);
const samples = [];

let id = 1;

filename.forEach((fn) => {
  const content = fs.readFileSync(constants.RAW_DIR + "/" + fn);

  const { session, student, drawings } = JSON.parse(content);

  for (let label in drawings) {
    samples.push({
      id: id,
      label: label,
      student_name: student,
      student_id: session,
    });

    const paths = drawings[label]
    fs.writeFileSync(`${constants.JSON_DIR}/${id}.json`, JSON.stringify(paths));
    generateImageFile(`${constants.IMG_DIR}/${id}.png`, paths)

    utils.printProgress(id, filename.length * 8)
    id++;
  }
})


fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));

fs.writeFileSync(constants.SAMPLES_JS, "const samples = " + JSON.stringify(samples) + ";");


function generateImageFile(outfile, paths) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (draw.path && typeof draw.path === 'function') {
    draw.paths(ctx, paths);
  } else {
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
  }

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outfile, buffer);
}