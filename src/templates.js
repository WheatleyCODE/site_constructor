import { row, col, ObjToCss } from './utils'

function title(block) {
  const {tag = 'h1', styles} = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), ObjToCss(styles))
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), ObjToCss(block.options.styles))
}

function columns(block) {
  const html = block.value.map(value => col(`<p>${value}</p>` , ObjToCss(block.options.styles.col)))
  return row( html.join(' '), ObjToCss(block.options.styles.row) )
}
function image(block) {
  console.log(block.value)
  return row(`<img src="${block.value}" />`, ObjToCss(block.options.styles))
}

export const templates = {
  title,
  text,
  columns,
  image,
}