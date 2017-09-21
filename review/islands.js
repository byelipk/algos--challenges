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

const ocean = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
];

const tinyOcean = [
  [1,1],
];

const ocean2 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
];

const counter = new IslandCounter(ocean2);

console.log(counter.run());
