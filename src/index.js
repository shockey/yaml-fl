import loader from "./loader"
import { load as YamlAST } from "yaml-ast-parser"
import allCorrectors from "./correctors/all"

export default function load(originalYaml, options = {
  unsafe: false
}) {
  const ast = YamlAST(originalYaml)
  const correctedYaml = correctYaml(originalYaml, ast)

  // needs to recurse
  return loader(correctedYaml, options)
}

function correctYaml(originalYaml, ast) {
  return allCorrectors.reduce((prev, corrector) => {
    return corrector(prev, ast)
  }, originalYaml)
}
