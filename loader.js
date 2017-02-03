import JsYaml from "js-yaml"


export default function load(yaml, options) {
  const loaderFn = options.unsafe ? JsYaml.load : JsYaml.safeLoad

  return loaderFn(yaml)
}
