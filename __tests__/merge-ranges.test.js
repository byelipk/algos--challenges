const { mergeRanges, sortMeetings } = require("../merge-ranges");

test('sorting meetings works', () => {
  const meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ];

  const sortedMeetings = sortMeetings(meetings);

  const expectedOutput = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 },
  ];

  expect(sortedMeetings).toEqual(expectedOutput);
});

test("it works", () => {
  const meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ];

  const mergedMeetings = mergeRanges(meetings);

  const expectedOutput = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 }
  ];

  expect(mergedMeetings).toEqual(expectedOutput);
});
