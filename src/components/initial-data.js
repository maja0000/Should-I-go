const initaialData = {
  events: {
    'event-1': {
      id: 'event-1',
      content: 'Concert',
      date: '25.10.2020',
      desc: 'awsedrftgyhuijkjhgftdreswsrdctfvgbhjn',
    },
    'event-2': {
      id: 'event-2',
      content: 'Musical',
      date: '25.10.2020',
      desc: 'awsedrftgyhuijkjhgftdreswsrdctfvgbhjn',
    },
    'event-3': {
      id: 'event-3',
      content: 'Live show',
      date: '25.10.2020',
      desc: 'awsedrftgyhuijkjhgftdreswsrdctfvgbhjn',
    },
    'event-4': {
      id: 'event-4',
      content: '?',
      date: '25.10.2020',
      desc: 'awsedrftgyhuijkjhgftdreswsrdctfvgbhjn',
    },
    'event-5': {
      id: 'event-5',
      content: 'Con???cert',
      date: '25.10.2020',
      desc: 'awsedrftgyhuijkjhgftdreswsrdctfvgbhjn',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'all',
      eventIds: ['event-1', 'event-2', 'event-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'yes',
      eventIds: ['event-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'no',
      eventIds: ['event-1', 'event-2', 'event-5'],
    },
    'column-4': {
      id: 'column-4',
      title: 'maybe?',
      eventIds: ['event-1', 'event-2', 'event-5'],
    },
  },
  columnOrder: ['column-1'],
};

export default initaialData;
