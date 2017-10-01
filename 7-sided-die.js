function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min)) + min);
}

function rand5() {
  return getRandomInt(1, 5);
}

function rand7() {
  let n1 = rand5();
  let n2 = rand5();

  let sum = (n1 + n2);

  if (sum === 6 || sum === 7) {
    return sum;
  }

  return n1;
}
