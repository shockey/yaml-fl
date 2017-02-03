import loader from "./loader"
import allCorrectors from "./correctors/all"

export function load(originalYaml, options) {
  const correctedYaml = correct(originalYaml)

  // needs to recurse
  return loader(originalYaml, options)
}

function correctYaml(originalYaml) {
  return allCorrectors.reduce((prev, corrector) => {
    return corrector(yaml)
  }, originalYaml)
}
