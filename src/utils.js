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
  if (typeof styles === 'string')  return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function blockTitleCreator(type, options) {
  const { optionColor, infoColor } = options.titleColor
  const { infoBackground, optionBackground } = options.titleBackground
  const { infoFontSize, optionFontSize } = options.titleFontSize

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

export function blockTextCreator(type, options) {
  const { optionBackground, infoBackground } = options.textBackground
  const { optionColor, infoColor } = options.textColor

  const optionCL = optionColor.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionBG = optionBackground.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
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

      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}

export function blockImageCreator(type, options) {
  const { optionBackground, infoBackground } = options.imageBackground
  const { optionLocation, infoLocation } = options.imageLocation

  const optionLC = optionLocation.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionBG = optionBackground.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)

  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="url">
      </div>

      <div class="form-group">
        <p>${infoLocation.text}</p>
        <select class="form-control form-control-sm" name="styleColor" >
          ${optionLC.join(' ')}
        </select>
      </div>

      <div class="form-group">
        <p>${infoBackground.text}</p>
        <select class="form-control form-control-sm" name="styleBackground" >
            ${optionBG.join(' ')}
         </select>
      </div>

      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}

export function blockColumnsCreator(type, options) {
  const { optionBackground, infoBackground } = options.columnsBackground
  const { infoQuantity, optionQuantity} = options.columnsQuantity
  const { infoHeight, optionHeight} = options.columnsHeight
  const { optionColor, infoColor } = options.columnsColor
  console.log(infoQuantity, optionQuantity)

  const optionQu = optionQuantity.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionBG = optionBackground.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionHG = optionHeight.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
  const optionCL = optionColor.map(obj => `<option value="${obj.styles}">${obj.text}</option>`)
 
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <p>${infoQuantity.text}</p>
        <select class="form-control form-control-sm" name="value" >
          ${optionQu.join(' ')}
        </select>
      </div>

      <div class="form-group">
        <p>${infoBackground.text}</p>
        <select class="form-control form-control-sm" name="styleBackground" >
          ${optionBG.join(' ')}
        </select>
      </div>

      <div class="form-group">
        <p>${infoHeight.text}</p>
        <select class="form-control form-control-sm" name="styleHeight" >
          ${optionHG.join(' ')}
        </select>
      </div>

      <div class="form-group">
        <p>${infoColor.text}</p>
        <select class="form-control form-control-sm" name="styleColor" >
          ${optionCL.join(' ')}
        </select>
      </div>

      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}