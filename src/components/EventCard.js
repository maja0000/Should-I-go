import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  font-size: 0.5em;
  text-align: center;
  //   background-color: black;
  color: pink;
  margin: 5px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export default function EventCard(props) {
  console.log(props);
  return <Card></Card>;
}
