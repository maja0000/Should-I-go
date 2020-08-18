import React, { useState } from 'react';

import './App.css';
// import initialData from './components/initial-data';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import useEvents from './components/getEvents';

const itemsFromBackend = [
  {
    id: uuid(),
    content: 'Casting Crowns (Drive In Concert Experience)',
    type: 'music festival',
    date: '2020-08-18',
  },
  {
    id: uuid(),
    content: 'The Killers with Johnny Marr',
    type: 'concert',
    date: '2020-09-02',
  },
  {
    id: uuid(),
    content: 'Britains Best - Lancaster',
    type: 'theater',
    date: '2020-09-06',
  },
  {
    id: uuid(),
    content: 'Mac King Comedy Magic Show',
    type: 'comedy',
    date: '2020-10-01',
  },
  {
    id: uuid(),
    content: 'Utah Jazz at Denver Nuggets',
    type: 'NBA',
    date: '2020-08-21',
  },
];
const columnsFromBackend = {
  [uuid()]: {
    name: 'all',
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: 'yes',
    items: [],
  },
  [uuid()]: {
    name: 'no',
    items: [],
  },
  [uuid()]: {
    name: 'maybe?',
    items: [],
  },
};
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);
  // const {events, loading} = useEvents();
  return (
    <>
      <h1 className="header">Should I go?</h1>
      <div className="App">
        <div className="app-wrapper">
          <div className="columns">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    key={columnId}
                  >
                    <div>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver
                                  ? '#E1E1E1'
                                  : 'white',
                                padding: 10,
                                width: 200,
                                minHeight: 500,
                              }}
                            >
                              <h1
                                style={{
                                  margin: '4px',
                                  color: 'red',
                                  fontSize: '2.5em',
                                }}
                              >
                                {column.name}
                              </h1>
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            fontSize: '1em',
                                            textAlign: 'center',
                                            color: 'black',
                                            margin: '5px',
                                            border: '3px dotted black',
                                            borderRadius: '20px',
                                            userSelect: 'none',
                                            padding: '10px',
                                            margin: '0 0 8px 0',
                                            color: snapshot.isDragging
                                              ? 'red'
                                              : 'black',

                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: 'flex',
                                              flexDirection: 'column',
                                              fontSize: '10px',
                                            }}
                                          >
                                            <strong
                                              style={{
                                                fontSize: '15px',
                                              }}
                                            >
                                              {' '}
                                              {item.content}
                                            </strong>{' '}
                                            ({item.type})
                                            <br />
                                            {item.date}
                                          </div>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
