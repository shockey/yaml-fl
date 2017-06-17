import { exciseMarkLine } from "src/yaml-tools"

export default function(yaml, ast) {
  let duplicateKeyErrors = (ast.errors || []).filter(err => {
    return err.reason === "duplicate key"
  }).slice(1)

  if(duplicateKeyErrors.length) {
    let res = duplicateKeyErrors.reduce((prev, error) => {
      return exciseMarkLine(error.mark, prev)
    }, yaml)
    return res
  } else {
    return yaml
  }
}
