# YAML Flexible Loader

`YAML-FL` is a JavaScript module that converts YAML strings to JSON. It aims to make YAML parsing faster and more resilient to user input errors, which makes it suitable for situations where YAML is being edited and rendered in real time.

Internally, we sit on top of [`js-yaml`](https://github.com/nodeca/js-yaml)'s wonderful loader methods, but add additional work before the conversion phase. We do two broad things to achieve flexibility and speed:

1. Attempt to correct typos and logical errors by piping the YAML string through a set of corrector rules.
2. Recursively break down the string into smaller pieces (YAML sub-objects), convert them, cache the individual results, and reassemble the entire result into a JavaScript object.

### Correctors

Correctors aim to avoid situations that cause parsing errors, and fix simple typos. They generally report warnings about any problems they come across.

- `001-duplicated-keys`: Reports and removes duplicated keys within the same mapping key, preserving the first definition.
- `002-space-after-colon`: Inserts missed spaces after colons for scalar values (i.e. `a:1` -> `a: 1`).
- `003-off-by-one-indent`: Realigns badly indented lines by looking behind at the previous line.
- `004-hash-in-unquoted-string`: Escapes `#` characters in unquoted string values by wrapping the value in quotes.
