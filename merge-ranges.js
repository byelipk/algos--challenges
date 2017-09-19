function sortMeetings(meetings) {
  // O(n log n) in the worst case
  return meetings.sort((a, b) => a.startTime <= b.startTime ? -1 : 1);
}

function mergeRanges(meetings) {
  // If we sort our meetings according to when they
  // start, then all meetings that can be merged together
  // will be close to each other.

  // Sort the meetings
  meetings = sortMeetings(meetings);

  // Initialize an array of merged meetings. Greedily add the first
  // sorted meeting into the merged meetings array.
  const mergedMeetings = [ meetings[0] ];

  // Merging takes O(n log n) time and O(n) space. Why O(n log n) time?
  // Because we had to sort the meetings array before we could perform
  // the merge.
  for (let currentMeeting = 0; currentMeeting < meetings.length; currentMeeting += 1) {

    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // Here's a formal algorithm to check if the meetings should be merged:
    //
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
    if (lastMergedMeeting.endTime >= meetings[currentMeeting].startTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        meetings[currentMeeting].endTime);
    }
    else {
      mergedMeetings.push(meetings[currentMeeting]);
    }
  }

  return mergedMeetings;
}

module.exports = { mergeRanges, sortMeetings };
