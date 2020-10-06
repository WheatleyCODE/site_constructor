import { block } from '../utils'
import { TextBlock, TitleBlock } from './blocks'

const temModel = {
  title: {
    titleColor: {
      info: {
        text: 'Цвет заголовка',
      },
      arr: [
        { text: 'Красный',styles: 'color: red', },
        { text: 'Черный',styles: 'color: black', },
        { text: 'Желтый', styles: 'color: yellow', },
        { text: 'Розовый', styles: 'color: pink', },
        { text: 'Синий', styles: 'color: blue', },
      ]
    }
  }
}

export class Sidebar {
  constructor(selector, updateCallBack) {
    this.$el = document.querySelector(selector)
    this.update = updateCallBack
    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('title', temModel.title),
    ].join(' ')
  }

  add(event) {
    event.preventDefault()
    // event.target - форма
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    let newBlock

    if (type === 'title') {
      newBlock = new TitleBlock(value, {styles})
    } else if (type === 'text') {
      newBlock = new TextBlock(value, {styles})
    }

    this.update(newBlock)
    event.target.value.value = ''
  }
}
