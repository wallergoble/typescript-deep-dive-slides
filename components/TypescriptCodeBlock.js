import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  pojoaque,
  solarizedDark,
  agate,
  androidstudio,
  arduinoLight,
  arta,
  ascetic,
  atelierCaveDark,
  atelierCaveLight, // maybe
  atelierDuneDark,
  atelierDuneLight, //ma
  atelierEstuaryDark,
  atelierEstuaryLight, // maybe
  atelierForestDark,
  atelierForestLight,
  atelierHeathDark,
  atelierHeathLight,
  atelierLakesideDark,
  atelierLakesideLight,
  atelierPlateauDark,
  atelierPlateauLight,
  atelierSavannaDark,
  atelierSavannaLight,
  atelierSeasideDark,
  atelierSeasideLight,
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
  atomOneDark,
  atomOneLight,
  brownPaper,
  codepenEmbed,
  colorBrewer,
  darcula,
  dark,
  darkula,
  defaultStyle,
  docco,
  dracula,
  far,
  foundation,
  githubGist,
  github,
  googlecode,
  grayscale,
  gruvboxDark,
  gruvboxLight,
  hopscotch,
  hybrid,
  idea,
  irBlack,
  kimbieDark,
  kimbieLight,
  magula,
  monoBlue,
  monokaiSublime,
  monokai,
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  purebasic,
  qtcreatorDark,
  qtcreatorLight,
  railscasts,
  rainbow,
  routeros,
  schoolBook,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs,
  vs2015,
  xcode,
  xt256,
  zenburn,
  a11yLight,
} from 'react-syntax-highlighter/dist/styles/hljs'

const TypescriptCodeBlock = props => {
  const { children, showLineNumbers = false } = props

  return (
    <SyntaxHighlighter
      showLineNumbers={showLineNumbers}
      language="typescript"
      customStyle={{
        fontSize: 100,
      }}
      customStyle={{ textAlign: 'left' }}
      style={a11yLight}>
      {children}
    </SyntaxHighlighter>
  )
}

export { TypescriptCodeBlock }
