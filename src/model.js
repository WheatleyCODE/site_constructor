import {Block} from './classes/blocks'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export let model = [
  new TitleBlock(
    'Конструктор сайтов на JS',
    {
      tag: 'h2',
      styles: {
        // Инлайн стили
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    }
  ),

  new TextBlock(
    'Текст, да? Точно. Тогда ладно.',
    {
      styles: {
        // Инлайн стили
        'background-color': '#fff',
        color: '#000',
        padding: '1.1rem',
        border: '1px solid black',
        'text-align': 'center'
      }
    }
  ),

  new ColumnsBlock(
    [
      'Первый блок',
      'Второй блок',
      'Третий блок',
      'Четвертый блок',
    ],
    {
      styles: {
        row: {
          // Инлайн стили
          'background-color': '#fff',
          color: '#000',
          padding: '5px',
          height: '200px',
          border: '1px solid black',
          'text-align': 'center',
          margin: '20px',
        },
        col: {
          'background-color': '#DEDEDE',
          margin: '5px',
          'border-radius': '5px'
        },
      },
    }
  ),

  new ImageBlock(
    'https://famousfinds.net/wp-content/uploads/2020/04/google-apple-partnership-may-be-tech-limited-and-more-tech-news-today.jpg',
    {
      styles: {
        'background-color': '#fff',
        border: '1px solid black',
        'text-align': 'center',
        display: 'flex',
        'justify-content': 'center',
        padding: '20px',
      }
    }
  ),
]

export function resetModel(){
  model = []
}

 export const creationTemplate = {
  title: {
    titleColor: {
      infoColor: {
        text: 'Цвет заголовка',
      },
      optionColor: [
        { text: 'Черный',styles: 'color: black; text-align: center;', },
        { text: 'Красный',styles: 'color: red; text-align: center;', },
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
        { text: 'Нет',styles: 'background-color: none;', },
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
        { text: 'h1', styles: 'h1', },
        { text: 'h2', styles: 'h2', },
        { text: 'h3', styles: 'h3', },
        { text: 'h4', styles: 'h4', },
        { text: 'h5', styles: 'h5', },
      ]
    }
  },

  text: {
    textColor: {
      infoColor: {
        text: 'Цвет текста',
      },
      optionColor: [
        { text: 'Черный',styles: 'color: black; text-align: center;', },
        { text: 'Красный',styles: 'color: red; text-align: center;', },
        { text: 'Желтый', styles: 'color: yellow; text-align: center;', },
        { text: 'Розовый', styles: 'color: pink; text-align: center;', },
        { text: 'Синий', styles: 'color: blue; text-align: center;', },
      ]
    },
    textBackground: {
      infoBackground: {
        text: 'Цвет фона',
      },
      optionBackground: [
        { text: 'Нет',styles: 'background-color: none;', },
        { text: 'Черный',styles: 'background-color: black;', },
        { text: 'Желтый', styles: 'background-color: yellow;', },
        { text: 'Розовый', styles: 'background-color: pink;', },
        { text: 'Синий', styles: 'background-color: blue;', },
      ]
    }
  },

  image: {
    imageLocation: {
      infoLocation: {
        text: 'Расположение',
      },
      optionLocation: [
        { text: 'Слева',styles: 'justify-content: flex-start;', },
        { text: 'Справа',styles: 'display: flex;justify-content: flex-end;', },
        { text: 'По центру', styles: 'display: flex;justify-content: center;', },
      ]
    },
    imageBackground: {
      infoBackground: {
        text: 'Цвет фона',
      },
      optionBackground: [
        { text: 'Нет',styles: 'background-color: none;', },
        { text: 'Черный',styles: 'background-color: black;', },
        { text: 'Желтый', styles: 'background-color: yellow;', },
        { text: 'Розовый', styles: 'background-color: pink;', },
        { text: 'Синий', styles: 'background-color: blue;', },
      ]
    }
  },

  columns: {
    columnsQuantity: {
      infoQuantity: {
        text: 'Количетво колонок',
      },
      optionQuantity: [
        { text: 'Одна',styles: "['Первый блок',]", },
        { text: 'Две',styles: "['Первый блок', 'Второй блок',]", },
        { text: 'Три', styles: "['Первый блок', 'Второй блок','Третий блок',]", },
        { text: 'Четыре', styles: "['Первый блок', 'Второй блок','Третий блок', 'Четвертый блок',]", },
      ]
    },
    columnsHeight: {
      infoHeight: {
        text: 'Высота колонок',
      },
      optionHeight: [
        { text: '200px',styles: "200px", },
        { text: '300px',styles: "300px", },
        { text: '400px', styles: "400px", },
        { text: '500px', styles: "500px", },
      ]
    },
    columnsBackground: {
      infoBackground: {
        text: 'Цвет фона',
      },
      optionBackground: [
        { text: 'Нет',styles: 'none;', },
        { text: 'Черный',styles: 'black;', },
        { text: 'Желтый', styles: 'yellow;', },
        { text: 'Розовый', styles: 'pink;', },
        { text: 'Синий', styles: 'blue;', },
      ]
    },

    columnsColor: {
      infoColor: {
        text: 'Цвет текста',
      },
      optionColor: [
        { text: 'Черный',styles: 'black', },
        { text: 'Красный',styles: 'red', },
        { text: 'Желтый', styles: 'yellow', },
        { text: 'Розовый', styles: 'pink', },
        { text: 'Синий', styles: 'blue', },
      ]
    },
  }
}