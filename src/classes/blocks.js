import { row, col, ObjToCss } from '../utils'

export class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован!')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), ObjToCss(styles))
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), ObjToCss(this.options.styles))
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const html = this.value.map(value => col(`<p>${value}</p>` , ObjToCss(this.options.styles.col)))
    return row( html.join(' '), ObjToCss(this.options.styles.row) )
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    return row(`<img src="${this.value}" />`, ObjToCss(this.options.styles))
  }
}
