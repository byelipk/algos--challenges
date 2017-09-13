function merge(left, right) {
  const output = [];

  while(left.length > 0 && right.length > 0) {
    if (left[0].startTime < right[0].startTime) { output.push(left.shift()) }
    else { output.push(right.shift()) }
  }

  while(left.length > 0) {
    output.push(left.shift());
  }

  while(right.length > 0) {
    output.push(right.shift());
  }

  return output;
}

function mergeSort(unsorted) {
  if (unsorted.length < 2) return unsorted;

  const middle = Math.floor(unsorted.length / 2);
  const left = mergeSort(unsorted.slice(0, middle));
  const right = mergeSort(unsorted.slice(middle, unsorted.length));

  return merge(left, right);
}

function doAllTheThings(timeRanges) {
  const sortedRanges = mergeSort(timeRanges); // O(n log n)

  // Remember, if we're sorting is JS, the callback function
  // must return a -1, 1, or 0! 😃
  // const sortedRanges = timeRanges.sort((a, b) => {
  //   if (a.startTime < b.startTime) {
  //     return -1;
  //   }
  //   else if (a.startTime > b.startTime) {
  //     return 1;
  //   }
  //   else {
  //     return 0;
  //   }
  // });

  let mergedRanges = [];
  let ops = sortedRanges.length;

  sortedRanges.reduce((mergedTime, time) => {

    // First pass!
    if (mergedTime.startTime === undefined) {
      ops--;
      return time;
    }

    // The second meeting starts after the previous meetings
    if (time.startTime > mergedTime.endTime) {
      // console.log('Second meeting starts after previous meeting')
      mergedRanges.push(mergedTime);
      ops--;
      return time;
    }

    // The second meeting ends before the previous meetings
    if (time.endTime < mergedTime.endTime) {
      // console.log('Second meeting ends before previous meetings')
      mergedRanges.push(mergedTime);
      ops--;
      return time;
    }

    // The end time of the first meeting and the start time of the
    // second meeting are equal
    if (mergedTime.endTime === time.startTime) {
      console.log('Previous meetings end the same time the next meeting starts')
      mergedRanges.push(mergedTime);
      ops--;
      return time;
    }

    mergedTime.endTime = time.endTime;
    ops--;

    if (ops === 0) {
      mergedRanges.push(mergedTime);
    }

    return mergedTime;
  }, {});


  return mergedRanges;
}

// {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

// O(n log n) time and O(n) space.
function mergeRanges(meetings) {
  // 1. We treat the meeting with earlier start time as "first," and
  //    the other as "second."
  //
  // 2. If the end time of the first meeting is equal to or greater
  //    than the start time of the second meeting, we merge the two
  //    meetings into one time range. The resulting time range's start
  //    time is the first meeting's start, and its end time is the later
  //    of the two meetings' end times.
  //
  // 3. Else, we leave them separate.

  // We can't assume meetings are IN ORDER. Since we're
  // treating meetings with earlier start times as "first",
  // we need to sort these meetings.
  const sortedMeetings = meetings.sort((a,b) => {
    if (a.startTime < b.startTime)      { return -1; }
    else if (a.startTime > b.startTime) { return 1; }
    else                                { return 0; }
  });

  const mergedMeetings = [];
  mergedMeetings[0] = sortedMeetings[0];

  for (var i = 1; i < sortedMeetings.length; i++) {
    let nextMeeting   = sortedMeetings[i];
    let mergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (mergedMeeting.endTime >= nextMeeting.startTime) {

      // nextMeeting starts later, but ends before previousMeeting
      if (mergedMeeting.endTime < nextMeeting.endTime) {
        mergedMeeting.endTime = nextMeeting.endTime;
      }
    }
    else {
      mergedMeetings.push(nextMeeting);
    }
  }

  return mergedMeetings;
}

const data = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
];

// Expected output:
//
// [
//   {startTime: 0, endTime: 1},
//   {startTime: 3, endTime: 8},
//   {startTime: 9, endTime: 12},
// ]

// console.log(doAllTheThings(data));
// console.log(doAllTheThings([{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]))
// console.log(doAllTheThings([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]))
// console.log(doAllTheThings([{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]))

// console.log(mergeRanges(data));
// console.log(mergeRanges([{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]))
// console.log(mergeRanges([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]))
// console.log(mergeRanges([{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]))
console.log(mergeRanges(  [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]))
