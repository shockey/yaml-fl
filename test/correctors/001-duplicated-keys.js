// Baseline functionality

import expect, {spyOn, createSpy} from 'expect'
import yamlFl from "src/index"

describe("duplicated keys corrector", () => {
  it("should correct a duplicate key in a map", () => {
    let yaml = "" +
    "a:\n" +
    "  b: old\n" +
    "  b: new\n" +
    "  c: same\n"

    expect(yamlFl(yaml)).toEqual({
      a: [
        { b: "old" },
        { c: "same" }
      ]
    })
  })
  it("should correct a duplicate key in an array map", () => {
    let yaml = "" +
    "a:\n" +
    "- b: old\n" +
    "  b: new\n" +
    "- c: same\n"

    expect(yamlFl(yaml)).toEqual({
      a: [
        { b: "new" },
        { c: "same" }
      ]
    })
  })
});
