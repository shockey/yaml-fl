export function exciseMarkLine(mark, yaml) {
  let ori = yaml
  let { position } = mark

  let regex = /.*\n/

  let before = ori.slice(0, position)
  let after = ori.slice(position)

  let excised = before + after.replace(regex, "")
  return excised
}
