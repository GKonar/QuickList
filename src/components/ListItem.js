import React from 'react';
import styled from 'styled-components';


const Item = styled.li`
  list-style-type: none;
  font-weight: 500;
`

function ListItem({ name }) {
  return <Item>{name}</Item>
}

export default ListItem
