// Baseline functionality

import expect, {spyOn, createSpy} from 'expect'
import yamlFl from "src/index"

describe("basic loader", () => {
  it("should convert a YAML string to a JS object", () => {
    let yaml = "" +
    "a:\n" +
    "- b: 2\n" +
    "- c: 3\n"

    expect(yamlFl(yaml)).toEqual({
      a: [
        { b: 2 },
        { c: 3 }
      ]
    })
  })
});
