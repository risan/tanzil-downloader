/* global expect:false, test:false */
const outputTypes = require("../src/output-types");

test("it has 4 output types", () => {
  expect(outputTypes).toBeInstanceOf(Object);

  const values = Object.values(outputTypes);

  expect(values).toHaveLength(4);

  expect(values).toEqual(["txt", "txt-2", "xml", "sql"]);
});
