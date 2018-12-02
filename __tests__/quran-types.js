/* global expect:false, test:false */
const quranTypes = require("../src/quran-types");

test("it has 6 quran types", () => {
  expect(quranTypes).toBeInstanceOf(Object);

  const values = Object.values(quranTypes);

  expect(values).toHaveLength(6);

  expect(values).toEqual([
    "simple",
    "simple-enhanced",
    "simple-min",
    "simple-clean",
    "uthmani",
    "uthmani-min"
  ]);
});
