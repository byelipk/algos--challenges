const getIslandCount = function(ocean) {
  //we don't sail in ponds or lakes!
  if (!ocean && ocean.length < 2) throw new Error("Invalid ocean");
  let islandCount = 0;

  const mapLand = startCoord => {
    //make sure we're in uncharted waters...
    if (ocean[startCoord.lat][startCoord.lon] !== 1)
      throw new Error("These are charted lands...");
    //using stack, plow ahead as if the ocean was a graph
    //marking all the adjoining lands as visited
    let stack = [];
    stack.push(startCoord);
    while (stack.length > 0) {
      const thisCoord = stack.pop();
      if (!thisCoord.charted) {
        const thisLat = thisCoord.lat,
          thisLon = thisCoord.lon;
        //make a note in the log that we've charted this here land
        ocean[thisLat][thisLon] = { charted: true };
        //take a glass to the west
        if (thisLon - 1 >= 0) {
          if (ocean[thisLat][thisLon - 1] === 1)
            stack.push({ lat: thisLat, lon: thisLon - 1 });
        }
        //and now to the east
        if (thisLon + 1 < ocean[thisLat].length) {
          if (ocean[thisLat][thisLon + 1] === 1)
            stack.push({ lat: thisLat, lon: thisLon + 1 });
        }
        //to the north now...
        if (thisLat - 1 >= 0) {
          if (ocean[thisLat - 1][thisLon] === 1)
            stack.push({ lat: thisLat - 1, lon: thisLon });
        }
        //and finally south!
        if (thisLat + 1 < ocean.length) {
          if (ocean[thisLat + 1][thisLon] === 1)
            stack.push({ lat: thisLat + 1, lon: thisLon });
        }
      }
    }
    console.log("Mapping finished - setting sail...");
  };

  const setSail = () => {
    console.log(
      "Hoist the main and bring us to beam reach! We sail with the tide..."
    );
    //find the next unvisited bit of land
    for (let lat = 0; lat < ocean.length; lat++) {
      for (let lon = 0; lon < ocean[lat].length; lon++) {
        if (ocean[lat][lon] === 1) {
          return { lat: lat, lon: lon };
        }
      }
    }
    return false;
  };

  //set a course to the first island on the map
  let nextIsland = setSail();
  //if there be one, it'll be ours to plunder!
  while (nextIsland) {
    //keep a tally of the lands we've been to
    //no need to plunder twice now...
    islandCount++;
    //chart the land
    mapLand(nextIsland);
    //where to next!
    nextIsland = setSail();
  }
  return islandCount;
};
