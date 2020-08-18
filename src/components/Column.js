import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
const ColumnWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  background-color: white;
  height: 500px;
  width: 200px;
  // opacity: 0.8;
  // border-radius: 0 0 20px 20px;
`;

const Title = styled.h1`
  color: red;
`;
export default function Column(props) {
  // console.log(props);
  // let events = props.events.map((event) => event.content);
  // console.log(events);
  return (
    <ColumnWrapper>
      <Title>{props.column.title}</Title>
      {props.events.map((event) => (
        <EventCard key={event.id} event={event}></EventCard>
      ))}
    </ColumnWrapper>
  );
}
