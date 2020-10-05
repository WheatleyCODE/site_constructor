import {Block} from './classes/blocks'

export const model = [
  new Block(
    'title',
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

  new Block(
    'text',
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

  new Block(
    'columns', 
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

  new Block(
    'image',
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