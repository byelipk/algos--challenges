// Given a list of start and end times,
// find the longest and shortest meetings.
// You can only do this in one pass.

const meetings = [
  [13, 14],
  [12, 12.5],
  [13, 15],
  [14, 16],
  [13, 17]
];

// We could sort the list, but that would probably degrade
// our time complexity to O(n log n). We could potentially
// use a counting sort where the duration of the meetings
// would be the array index. That would give us an array
// where the shortest meeting is located at an earlier position
// and the longest meeting is located in a later position.

// Counting
const durations = [];
meetings.forEach((meeting, index) => {
  durations[Math.floor(meeting[1] - meeting[0])] = 1
});

// Using counting is tricky here because we're not dealing with
// straight up, integer values. Our second record is a double.
// That means we need to figure out what position a non-round
// number should go to.
console.log(durations);


// Greedy

let shortestMeetingDuration = Infinity; // Infinity can be very helpful when we're doing min/max checking
let longestMeetingDuration  = null;
meetings.forEach((meeting, index) => {
  const currentMeetingDuration = meeting[1] - meeting[0];
  shortestMeetingDuration = Math.min(shortestMeetingDuration, currentMeetingDuration);
  longestMeetingDuration  = Math.max(longestMeetingDuration, currentMeetingDuration);
});
console.log(shortestMeetingDuration, longestMeetingDuration);
