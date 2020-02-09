const boxes = weights => {
  let box = [];
  let allBoxes = [];

  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  weights.forEach(e => {
    if (arrSum(box) + e > 10) {
      allBoxes.push(box);
      console.log(allBoxes);
      box = [e];
    } else {
      box.push(e);
    }
  });
  allBoxes.push(box);
  console.log(`Boxes after sort: ${allBoxes} `);

  return allBoxes.length;
};
