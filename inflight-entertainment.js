function exponentialTime(flightLength, movieLengths) {
  for (let i = 0; i < movieLengths.length; i += 1) {
    for (let j = 0; j < movieLengths.length; j += 1) {

      // Cannot watch same movie twice
      if (i === j) {
        continue;
      }

      // Users will watch exactly two movies
      if ((movieLengths[i] + movieLengths[j]) === flightLength) {
        return true;
      }
    }
  }

  return false;
}

function linearTime(flightLength, movieLengths) {
  const firstScreenings = {};
  const secondScreenings = {};

  for (let i = 0; i < movieLengths.length; i += 1) {
    const timeRemaining = flightLength - movieLengths[i];

    if (timeRemaining > 0) {
      firstScreenings[movieLengths[i]] = timeRemaining;
      secondScreenings[timeRemaining] = i;
    }
  }

  for (let j = 0; j < movieLengths.length; j += 1) {
    const timeRemaining = flightLength - movieLengths[j];
    const secondScreeningLength = firstScreenings[timeRemaining];
    if (secondScreeningLength && secondScreenings[secondScreeningLength] !== j) {
      return true;
    }
  }
  return false;
}

function improveRuntimePerf(flightLength, movieLengths) {
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i += 1) {

    const firstMovieLength = movieLengths[i];
    const timeRemaining = flightLength - firstMovieLength;

    if (movieLengthsSeen.has(timeRemaining)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);

  }
  return false;
}

module.exports = { exponentialTime, linearTime, improveRuntimePerf };
