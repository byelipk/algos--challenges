const { maxDuffelBagValue, dynamic } = require("../max-duffel-bag-value");

test("it works", () => {
  var cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 }
  ];

  var capacity = 20;

  expect(maxDuffelBagValue(cakeTypes, capacity)).toBe(555);
});

test("it works", () => {
  var cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 }
  ];

  var capacity = 20;

  expect(dynamic(cakeTypes, capacity)).toBe(555);
});
