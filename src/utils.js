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

export function blockTitleCreator(type, options) {
  const { optionColor, infoColor } = options.titleColor
  const { infoBackground, optionBackground } = options.titleBackground
  const { infoFontSize, optionFontSize } = options.titleFontSize
  console.log(infoFontSize, optionFontSize)

  const optionCL = optionColor.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionBG = optionBackground.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionFS = optionFontSize.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="Текст">
      </div>
      <div class="form-group">
        <p>${infoColor.text}</p>
        <select class="form-control form-control-sm" name="styleColor" >
          ${optionCL.join(' ')}
        </select>
      </div>

      <div class="form-group">
        <p>${infoBackground.text}</p>
        <select class="form-control form-control-sm" name="styleBackground" >
          ${optionBG.join(' ')}
        </select>
      </div>

      <div class="form-group">
        <p>${infoFontSize.text}</p>
        <select class="form-control form-control-sm" name="styleFontSize" >
          ${optionFS.join(' ')}
        </select>
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}