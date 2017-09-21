// DOESN'T WORK :(
class IslandCounter {
  constructor(ocean) {
    // Assume length of each row is the same
    this.ocean = ocean;
    this.rows = this.ocean.length;
    this.cols = this.ocean[0].length;
    this.visited = new Array(this.rows).fill([]);
    this.sides = 4;
  }

  isValidCell(row, col) {
    return (row >= 0 && row < this.rows) &&
           (col >= 0 && col < this.cols) &&
           (this.ocean[row][col] && !this.visited[row][col]);
  }

  isWater(row, col) {
    return this.ocean[row][col] === 0;
  }

  isLand(row, col) {
    return this.ocean[row][col] === 1;
  }

  hasNotBeenVisited(row, col) {
    return this.visited[row][col] !== true;
  }

  dfs(row, col) {
    this.visited[row][col] = true;

    // NORTH
    if (this.isValidCell(row-1, col)) {
      this.dfs(row-1, col);
    }

    // SOUTH
    if (this.isValidCell(row+1, col)) {
      this.dfs(row+1, col);
    }

    // EAST
    if (this.isValidCell(row, col+1)) {
      this.dfs(row, col+1);
    }

    // WEST
    if (this.isValidCell(row, col-1)) {
      this.dfs(row, col-1);
    }
  }

  run() {
    let count = 0;

    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        if (this.isValidCell(row, col)) {
          this.dfs(row, col); // perform depth first search on a graph
          count += 1;
        }
      }
    }

    return count;
  }

}

function getIslandCounts(ocean) {
  if (!ocean || ocean.length < 2) { throw new Error('No lakes or ponds, please!'); }

  let islandCount = 0;

  function mapLand(startCoord) {
    if (ocean[startCoord.lat][startCoord.lon] !== 1) {
      throw new Error('This is the ocean, silly. 😗');
    }

    // A stack with depth first search!
    const stack = [];

    stack.push(startCoord);

    while (stack.length > 0) {
      const coord = stack.pop();

      if (!coord.charted) {
        // Remember that we visited this land before!
        ocean[coord.lat][coord.lon] = { charted: true };

        // WEST
        if (coord.lat - 1 >= 0) {
          if (ocean[coord.lat][coord.lon - 1] === 1) {
            stack.push({lat: coord.lat, lon: coord.lon - 1})
          }
        }

        // EAST
        if (coord.lon + 1 < ocean[coord.lat].length) {
          if (ocean[coord.lat][coord.lon + 1] === 1) {
            stack.push({lat: coord.lat, lon: coord.lon + 1});
          }
        }

        // NORTH
        if (coord.lat - 1 >= 0) {
          if (ocean[coord.lat - 1][coord.lon] === 1) {
            stack.push({lat: coord.lat - 1, lon: coord.lon});
          }
        }

        // SOUTH
        if (coord.lat + 1 < ocean.length) {
          if (ocean[coord.lat + 1][coord.lon] === 1) {
            stack.push({lat: coord.lat + 1, lon: coord.lon});
          }
        }
      }
    }
  }

  // O(n) because we're not looping over the same array.
  function setSail() {
    for (let lat = 0; lat < ocean.length; lat += 1) {
      for (let lon = 0; lon < ocean[lat].length; lon += 1) {
        if (ocean[lat][lon] === 1) {
          return { lat: lat, lon: lon };
        }
      }
    }
    return false;
  }

  let nextIsland = setSail();

  while(nextIsland) {
    islandCount += 1;        // we found another island

    mapLand(nextIsland);     // go to the next one

    nextIsland = setSail();
  }

  return islandCount;
}

const ocean1 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
];

const ocean2 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,1],
  [0,0,1,1,1]
];

const ocean3 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
];

// const counter = new IslandCounter(ocean3);

// console.log(counter.run());
console.log(getIslandCounts(ocean3));
