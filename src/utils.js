export function row(content, styles = '') {
  return `<div style="${styles}" class="row">${content}</div>`
}

export function col(content, styles = '') {
  return `<div style="${styles}" class="col-sm">${content}</div>`
}

export function ObjToCss(styles = {}) {
  // const keys = Object.keys(styles)
  // const array = keys.map((key) => {
  //   return `${key}: ${styles[key]}`
  // })
  // console.log(array.join(';'))
  // return array.join(';')

  // Супер сокращение.
  // return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
  
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}