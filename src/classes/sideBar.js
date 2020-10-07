import { creationTemplate } from '../model'
import { blockTitleCreator, blockTextCreator, blockImageCreator, blockColumnsCreator } from '../utils'
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './blocks'

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
      blockTitleCreator('Заголовок', creationTemplate.title),
      blockTextCreator('Текст', creationTemplate.text),
      blockImageCreator('Картинка', creationTemplate.image),
      blockColumnsCreator('Колонки', creationTemplate.columns),
    ].join(' ')
  }

  add(event) {
    event.preventDefault()
    // event.target - форма
    const type = event.target.name
    const value = event.target.value.value
    const CLstyles = event.target.styleColor.value
    const BGstyles = event.target.styleBackground.value
    const styles = CLstyles + BGstyles
    
    let newBlock

    if (type === 'Заголовок') {
      const FStag = event.target.styleFontSize.value
      newBlock = new TitleBlock(value, {styles, tag: FStag})
    } else if  (type === 'Текст') {
      newBlock = new TextBlock(value, {styles})
    } else if (type === 'Картинка') {
      newBlock = new ImageBlock(value, {styles})
    } else if ( type === 'Колонки') {
      const valueTest = eval('(' + value + ')')
      const HGstyles = event.target.styleHeight.value
      
      const obj = eval(`({styles:{ row: {height: '${HGstyles}', 'text-align': 'center', 'background-color': '#fff',  margin: '20px',}, col: {'background-color': '${BGstyles}',color: '${CLstyles}', margin: '5px', 'border-radius': '5px'}}})`);
      // const styleTest = eval('(' + styles + ')')

      // const styleTest = {
      //   styles: {
      //     row: {
      //       'background-color': '#fff',
      //       padding: '5px',
      //       height: '400px',
      //       'text-align': 'center',
      //       margin: '20px',
      //     },
      //     col: {
      //       'background-color': '#DEDEDE',
      //       margin: '5px',
      //       'border-radius': '5px'
      //     },
      //   }
      // }

      newBlock = new ColumnsBlock(valueTest, obj)
    }
    
    this.update(newBlock)
    event.target.value.value = ''
  }
}
