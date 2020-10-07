import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock, modalBlock} from './classes/blocks'

const COLOR_BLACK = '#1d2124'
const COLOR_WHITE = '#f8f9fa'
const COLOR_GREY = '#6c757d'
const COLOR_BLUE = '#007bff'
const COLOR_TURQUOISE = '#17a2b8'
const COLOR_GREEN = '#28a745'
const COLOR_RED = '#dc3545'
const COLOR_YELLOW = '#ffc107'

export let model = [
  new TitleBlock(
    'Конструктор сайтов на JS!',
    {
      tag: 'h2',
      styles: {
        // Инлайн стили
        background: `linear-gradient(to right, ${COLOR_BLUE}, ${COLOR_RED})`,
        color: COLOR_WHITE,
        padding: '1.5rem',
        'text-align': 'center',
      }
    }
  ),

  new TextBlock(
    'Текст, да? Точно. Тогда ладно.',
    {
      styles: {
        // Инлайн стили
        'background-color': COLOR_WHITE,
        color: COLOR_BLACK,
        padding: '10px',
        border: '1px solid black',
        'text-align': 'center',
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
          'background-color': COLOR_WHITE,
          color: COLOR_BLACK,
          padding: '5px',
          height: '200px',
          border: '1px solid black',
          'text-align': 'center',
          margin: '20px',
          display: 'none',
        },
        col: {
          'background-color': COLOR_GREY,
          margin: '5px',
          'border-radius': '5px',
        },
      },
    }
  ),

  new ImageBlock(
    'https://famousfinds.net/wp-content/uploads/2020/04/google-apple-partnership-may-be-tech-limited-and-more-tech-news-today.jpg',
    {
      styles: {
        'background-color': COLOR_WHITE,
        border: '1px solid black',
        'text-align': 'center',
        display: 'flex',
        'justify-content': 'center',
        padding: '20px',
        display: 'none',
      }
    }
  ),

]

export function resetModel() {
  model = []
}

 export const creationTemplate = {
  title: {
    titleColor: {
      infoColor: {
        text: 'Цвет заголовка',
      },
      optionColor: [
        { text: 'Черный',styles: `color: ${COLOR_BLACK}; text-align: center;`, },
        { text: 'Белый',styles: `color: ${COLOR_WHITE}; text-align: center;`, },
        { text: 'Серый',styles: `color: ${COLOR_GREY}; text-align: center;`, },
        { text: 'Синий', styles: `color: ${COLOR_BLUE}; text-align: center;`, },
        { text: 'Бирюзовый',styles: `color: ${COLOR_TURQUOISE}; text-align: center;`, },
        { text: 'Зелёный',styles: `color: ${COLOR_GREEN}; text-align: center;`, },
        { text: 'Красный',styles: `color: ${COLOR_RED}; text-align: center;`, },
        { text: 'Желтый', styles: `color: ${COLOR_YELLOW}; text-align: center;`, },
      ]
    },
    titleBackground: {
      infoBackground: {
        text: 'Цвет фона',
      },
      optionBackground: [
        { text: 'Нет',styles: 'background-color: none;', },
        { text: 'Черный',styles: `background-color: ${COLOR_BLACK};`, },
        { text: 'Белый',styles: `background-color: ${COLOR_WHITE};`, },
        { text: 'Серый',styles: `background-color: ${COLOR_GREY};`, },
        { text: 'Синий',styles: `background-color: ${COLOR_BLUE};`, },
        { text: 'Бирюзовый',styles: `background-color: ${COLOR_TURQUOISE};`, },
        { text: 'Зелёный',styles: `background-color: ${COLOR_GREEN};`, },
        { text: 'Красный',styles: `background-color: ${COLOR_RED};`, },
        { text: 'Желтый',styles: `background-color: ${COLOR_YELLOW};`, }, 
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
        { text: 'Черный',styles: `color: ${COLOR_BLACK}; text-align: center;`, },
        { text: 'Белый',styles: `color: ${COLOR_WHITE}; text-align: center;`, },
        { text: 'Серый',styles: `color: ${COLOR_GREY}; text-align: center;`, },
        { text: 'Синий', styles: `color: ${COLOR_BLUE}; text-align: center;`, },
        { text: 'Бирюзовый',styles: `color: ${COLOR_TURQUOISE}; text-align: center;`, },
        { text: 'Зелёный',styles: `color: ${COLOR_GREEN}; text-align: center;`, },
        { text: 'Красный',styles: `color: ${COLOR_RED}; text-align: center;`, },
        { text: 'Желтый', styles: `color: ${COLOR_YELLOW}; text-align: center;`, },
      ]
    },
    textBackground: {
      infoBackground: {
        text: 'Цвет фона',
      },
      optionBackground: [
        { text: 'Нет',styles: 'background-color: none;', },
        { text: 'Черный',styles: `background-color: ${COLOR_BLACK};`, },
        { text: 'Белый',styles: `background-color: ${COLOR_WHITE};`, },
        { text: 'Серый',styles: `background-color: ${COLOR_GREY};`, },
        { text: 'Синий',styles: `background-color: ${COLOR_BLUE};`, },
        { text: 'Бирюзовый',styles: `background-color: ${COLOR_TURQUOISE};`, },
        { text: 'Зелёный',styles: `background-color: ${COLOR_GREEN};`, },
        { text: 'Красный',styles: `background-color: ${COLOR_RED};`, },
        { text: 'Желтый',styles: `background-color: ${COLOR_YELLOW};`, }, 
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
        { text: 'Черный',styles: `background-color: ${COLOR_BLACK};`, },
        { text: 'Белый',styles: `background-color: ${COLOR_WHITE};`, },
        { text: 'Серый',styles: `background-color: ${COLOR_GREY};`, },
        { text: 'Синий',styles: `background-color: ${COLOR_BLUE};`, },
        { text: 'Бирюзовый',styles: `background-color: ${COLOR_TURQUOISE};`, },
        { text: 'Зелёный',styles: `background-color: ${COLOR_GREEN};`, },
        { text: 'Красный',styles: `background-color: ${COLOR_RED};`, },
        { text: 'Желтый',styles: `background-color: ${COLOR_YELLOW};`, }, 
      ]
    }
  },

  columns: {
    columnsQuantity: {
      infoQuantity: {
        text: 'Количетво колонок',
      },
      optionQuantity: [
        { text: '1',styles: "['Первый блок',]", },
        { text: '2',styles: "['Первый блок', 'Второй блок',]", },
        { text: '3', styles: "['Первый блок', 'Второй блок','Третий блок',]", },
        { text: '4', styles: "['Первый блок', 'Второй блок','Третий блок', 'Четвертый блок',]", },
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
        { text: 'Черный',styles: COLOR_BLACK, },
        { text: 'Белый', styles: COLOR_WHITE, },
        { text: 'Серый', styles: COLOR_GREY, },
        { text: 'Синий', styles: COLOR_BLUE, },
        { text: 'Бирюзовый', styles: COLOR_TURQUOISE, },
        { text: 'Зелёный', styles: COLOR_GREEN, },
        { text: 'Красный', styles: COLOR_RED, },
        { text: 'Желтый', styles: COLOR_YELLOW, },
      ]
    },

    columnsColor: {
      infoColor: {
        text: 'Цвет текста',
      },
      optionColor: [
        { text: 'Черный',styles: COLOR_BLACK, },
        { text: 'Белый', styles: COLOR_WHITE, },
        { text: 'Серый', styles: COLOR_GREY, },
        { text: 'Синий', styles: COLOR_BLUE, },
        { text: 'Бирюзовый', styles: COLOR_TURQUOISE, },
        { text: 'Зелёный', styles: COLOR_GREEN, },
        { text: 'Красный', styles: COLOR_RED, },
        { text: 'Желтый', styles: COLOR_YELLOW, },
      ]
    },
  }
}