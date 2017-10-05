const moment = require("moment");

const now = moment.now();
const today = moment(now).format();
const tomorrow = moment(now).add(1, "day").format();
const twoDaysFromNow = moment(now).add(2, "days").format();
const threeDaysFromNow = moment(now).add(3, "days").format();
const fourDaysFromNow = moment(now).add(4, "days").format();
const fiveDaysFromNow = moment(now).add(5, "days").format();
const sixDaysFromNow = moment(now).add(6, "days").format();
const oneWeekFromNow = moment(now).add(1, "week").format();
const twoWeeksFromNow = moment(now).add(2, "week").format();
const threeWeeksFromNow = moment(now).add(3, "week").format();
const oneMonthFromNow = moment(now).add(1, "month").format();

// Assume the dates are sorted

const data = [
  {
    username: "Jim",
    email: "jim@email.com",
    country: "France",
    dates: [today, tomorrow]
  },

  {
    username: "Sarah",
    email: "sarah@email.com",
    country: "France",
    dates: [today, tomorrow]
  },

  {
    username: "Amanda",
    email: "amanda@email.com",
    country: "France",
    dates: [today, threeDaysFromNow]
  },

  {
    username: "John",
    email: "john@email.com",
    country: "France",
    dates: [threeDaysFromNow, fourDaysFromNow]
  },

  {
    username: "Sam",
    email: "sam@email.com",
    country: "France",
    dates: [threeDaysFromNow]
  },

  {
    username: "Charlies",
    email: "charlie@email.com",
    country: "USA",
    dates: [today]
  }
];

const COUNTRIES = {};

// O(1)
function findTheDiff(date) {
  const diff = new Date(date).getTime() - new Date(today).getTime();

  return Math.ceil(Math.abs(diff) / (1000 * 3600 * 24));
}

// O(1)
function getCountryWithDates(country) {
  if (COUNTRIES[country]) {
    return COUNTRIES[country]; // Assume it's an array!
  }

  // New country!
  COUNTRIES[country] = [];

  return COUNTRIES[country];
}

// O(n) because we're looping over different arrays.
data.forEach((user) => {
  if (!user.country) {
    throw new Error('We don\'t know where this person wants to go. 🤷‍♂️');
  }

  const countryWithDates = getCountryWithDates(user.country);


  // NOTE Assume dates are already sorted for now.
  if (user.dates && user.dates.length) {
    user.dates.forEach(date => {
      // Find the number of days from today. For an app like this
      // it doesn't make sense to care about dates in the past.
      const differenceBetweenCurrentDateAndToday = findTheDiff(date);

      if (differenceBetweenCurrentDateAndToday < 0) {
        throw new Error('That day is in the past!');
      }

      if (countryWithDates[differenceBetweenCurrentDateAndToday]) {
        countryWithDates[differenceBetweenCurrentDateAndToday] += 1;
      }
      else {
        countryWithDates[differenceBetweenCurrentDateAndToday] = 1;
      }
    });
  }
});

// console.log(COUNTRIES);

const results = [];

const countryNames = Object.keys(COUNTRIES); // O(n)

countryNames.forEach(name => {
  const sortedDatesWithCountOfAttendees = COUNTRIES[name]; // O(1)

  // O(n) time and O(n) space
  const mapOfSortedDates = sortedDatesWithCountOfAttendees.map((count, day) => {
    return { country: name, attendees: count, day: day };
  });

  // O(n) time and O(n) space
  const filteredMap = mapOfSortedDates.filter(result => result !== undefined)

  // O(n log n) time
  filteredMap.sort((a, b) => b.attendees - a.attendees);

  results.push({
    name: name,
    dates: filteredMap.slice(0, 2).map(result => {
      return moment(now).add(result.day, 'days').toISOString(); // Convert day to string
    })
  });
});

console.log(results);
