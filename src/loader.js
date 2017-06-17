import JsYaml from "js-yaml"


export default function load(yaml, options) {
  const loaderFn = options.unsafe ? JsYaml.load : JsYaml.safeLoad
  console.log("loading!")
  console.log(yaml)
  return loaderFn(yaml)
}
