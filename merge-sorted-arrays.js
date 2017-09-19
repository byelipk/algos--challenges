// O(n) time and O(n) space where n is the number of items in the merged array
function merge(myCookies, yourCookies) {
  const ourCookies = [];

  while (myCookies.length && yourCookies.length) {
    if (myCookies[0] < yourCookies[0]) {
      ourCookies.push(myCookies.shift());
    }
    else {
      ourCookies.push(yourCookies.shift());
    }
  }

  while (myCookies.length) {
    ourCookies.push(myCookies.shift());
  }

  while (yourCookies.length) {
    ourCookies.push(yourCookies.shift());
  }

  return ourCookies;
}

function mergeWithPointers(myCookies, yourCookies) {
  const ourCookies = [];

  let myCookieIndex = 0;
  let yourCookieIndex = 0;

  while ((myCookieIndex < myCookies.length) && (yourCookieIndex < yourCookies.length)) {
    if (myCookies[myCookieIndex] < yourCookies[yourCookieIndex]) {
      ourCookies.push(myCookies[myCookieIndex]);
      myCookieIndex += 1;
    }
    else {
      ourCookies.push(yourCookies[yourCookieIndex]);
      yourCookieIndex += 1;
    }
  }

  while (myCookieIndex < myCookies.length) {
    ourCookies.push(myCookies[myCookieIndex]);
    myCookieIndex += 1;
  }

  while (yourCookieIndex < yourCookies.length) {
    ourCookies.push(yourCookies[yourCookieIndex]);
    yourCookieIndex += 1;
  }

  return ourCookies;
}

function mergeDRY(myCookies, yourCookies) {
  const ourCookies = [];

  let myCookieIndex   = 0;
  let yourCookieIndex = 0;
  let ourCookieIndex  = 0;

  while ( ourCookieIndex < (myCookies.length + yourCookies.length) ) {
    const iAteAllMyCookies = myCookieIndex >= myCookies.length;
    const youAteAllYourCookies = yourCookieIndex >= yourCookies.length;

    if (!iAteAllMyCookies &&
        (youAteAllYourCookies ||
          myCookies[myCookieIndex] < yourCookies[yourCookieIndex])) {
      ourCookies[ourCookieIndex++] = myCookies[myCookieIndex++];
    }
    else {
      ourCookies[ourCookieIndex++] = yourCookies[yourCookieIndex++];
    }
  }

  return ourCookies;
}

module.exports = { merge, mergeWithPointers, mergeDRY };
