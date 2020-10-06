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
  if(typeof styles === 'string')  return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function block(type, options) {
  const { arr, info } = options.titleColor
  console.log(arr, info)
  const option = arr.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <p>${info.text}</p>
        <select class="form-control form-control-sm" name="styles" >
          ${option.join(' ')}
        </select>
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}