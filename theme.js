import hopscotch from 'react-syntax-highlighter/styles/prism/hopscotch'
import {
  dark,
  future,
  condensed,
  yellow,
  swiss, // yes
  book,
  script,
  comic,
  notes,
  code,
  lobster,
  hack,
  rye,
  big,
} from 'mdx-deck/themes'

export default {
  ...swiss,
  prism: {
    style: hopscotch,
  },
}
