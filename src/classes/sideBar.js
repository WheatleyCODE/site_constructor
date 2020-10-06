import { blockTitleCreator } from '../utils'
import { TextBlock, TitleBlock } from './blocks'

const temModel = {
  title: {
    titleColor: {
      infoColor: {
        text: 'Цвет заголовка',
      },
      optionColor: [
        { text: 'Красный',styles: 'color: red; text-align: center;', },
        { text: 'Черный',styles: 'color: black; text-align: center;', },
        { text: 'Желтый', styles: 'color: yellow; text-align: center;', },
        { text: 'Розовый', styles: 'color: pink; text-align: center;', },
        { text: 'Синий', styles: 'color: blue; text-align: center;', },
      ]
    },
    titleBackground: {
      infoBackground: {
        text: 'Цвет фона',
      },
      optionBackground: [
        { text: 'Красный',styles: 'background-color: red;', },
        { text: 'Черный',styles: 'background-color: black;', },
        { text: 'Желтый', styles: 'background-color: yellow;', },
        { text: 'Розовый', styles: 'background-color: pink;', },
        { text: 'Синий', styles: 'background-color: blue;', },
      ]
    },
    titleFontSize: {
      infoFontSize: {
        text: 'Размер шрифта',
      },
      optionFontSize: [
        { text: '10px', styles: 'font-size: 10px;', },
        { text: '15px', styles: 'font-size: 15px;', },
        { text: '20px', styles: 'font-size: 20px;', },
        { text: '25px', styles: 'font-size: 25px;', },
        { text: '30px', styles: 'font-size: 30px;', },
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
      blockTitleCreator('Заголовок', temModel.title),
    ].join(' ')
  }

  add(event) {
    event.preventDefault()
    // event.target - форма
    const type = event.target.name
    const value = event.target.value.value
    const CLstyles = event.target.styleColor.value
    const BGstyles = event.target.styleBackground.value
    const FSstyles = event.target.styleFontSize.value

    const styles = CLstyles + BGstyles + FSstyles
    console.log(styles)
    

    let newBlock
    if (type === 'Заголовок') {
      newBlock = new TitleBlock(value, {styles})
    } 
    
    this.update(newBlock)
    event.target.value.value = ''
  }
}
