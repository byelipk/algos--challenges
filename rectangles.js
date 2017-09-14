function build(options) {
  if (!options) options = {};

  return {
    leftX:   options.leftX   === undefined ? 0   : options.leftX,
    bottomY: options.bottomY === undefined ? 100 : options.bottomY,
    width:   options.width   === undefined ? 100 : options.width,
    height:  options.height  === undefined ? 100 : options.height,
  };
}

function findXOverlap(a, b) {

  // The start of our range will always be the highest value of (leftX)
  const highestStartingPoint = Math.max(a.leftX, b.leftX);

  // The end of our range will always be the smallest value of (leftX + width)
  const lowestEndingPoint = Math.min(a.leftX + a.width, b.leftX + b.width);

  if (highestStartingPoint >= lowestEndingPoint) {
    return false;
  }

  return true;
}

function findYOverlap(a, b) {

  // The start of our range will always be the highest value of (bottomY - height)
  const highestStartingPoint = Math.max(a.bottomY - a.height, b.bottomY - b.height);

  // The end of our range will always be the smallest value of (bottomY)
  const lowestEndingPoint = Math.min(a.bottomY, b.bottomY);

  if (highestStartingPoint >= lowestEndingPoint) {
    return false;
  }

  return true;

}

function doesOverlap(a, b) {
  return findXOverlap(a, b) && findYOverlap(a, b);
}

// O(1) O(1) and O(1) O(1) space
// NOTE We're computing the values several times. We can improve on this
// by caching the computations in an object.
function findOverlap(a, b) {
  if (doesOverlap(a, b)) {
    return {
      leftX: Math.max(a.leftX, b.leftX),
      bottomY: Math.min(a.bottomY, b.bottomY),
      width: Math.min(a.leftX + a.width, b.leftX + b.width) - Math.max(a.leftX, b.leftX),
      height: Math.min(a.bottomY, b.bottomY) - Math.max(a.bottomY - a.height, b.bottomY - b.height)
    }
  }
  else {
    return undefined;
  }
}

module.exports = { build, findXOverlap, findYOverlap, findOverlap }
