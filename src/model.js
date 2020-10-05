export const model = [
  { type: 'title',
    value: 'Конструктор сайтов на JS',
    options: {
      tag: 'h2',
      styles: {
        // Инлайн стили
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    },
  },

  { type: 'text',
    value: 'Текст, да? Точно. Тогда ладно.',
    options: {
      styles: {
        // Инлайн стили
        'background-color': '#fff',
        color: '#000',
        padding: '1.1rem',
        border: '1px solid black',
        'text-align': 'center'
      }
    },
  },

  { type: 'columns',
    value: [
      'Первый блок',
      'Второй блок',
      'Третий блок',
      'Четвертый блок',
    ],
    options: {
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
    },
  },

  { type: 'image',
  value: 'https://famousfinds.net/wp-content/uploads/2020/04/google-apple-partnership-may-be-tech-limited-and-more-tech-news-today.jpg',
  options: {
    styles: {
      'background-color': '#fff',
      border: '1px solid black',
      'text-align': 'center',
      display: 'flex',
      'justify-content': 'center',
      padding: '20px',
    }
  },
  },

]