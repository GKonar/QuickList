import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { ItemsContext } from '../context/items.context';

import { ReactComponent as Bin } from '../assets/icons/bin.svg';

const Item = styled.li`
  list-style-type: none;
  font-weight: 700;
  color: #6ab04c;
  display: flex;
  align-items: center;
`

const ItemName = styled.p`
  transition: .2s;
`

const RemoveButton = styled.button`
  margin: ${({ theme }) => theme.margin.xsmall} ${({ theme }) => theme.margin.default};
  color: #fff;
  font-weight: 800;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ff3f34;
  background-color: #ff7675;
  cursor: pointer;
  order: 1;

  span {
    svg {
      width: 100%;
      height: 100%;
      fill: #fff;
    }
  }
`

const Checkbox = styled.input`
margin: 0 ${({ theme }) => theme.margin.small};
`

function ListItem({ name, id }) {
  const { removeItem } = useContext(ItemsContext);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e, checked) => {
    setChecked(e.target.checked);
  }

  return (
    <Item>
      <Checkbox type="checkbox" onChange={(e) => handleCheck(e, checked)} checked={checked} />
      <RemoveButton onClick={() => removeItem(id)}><span><Bin /></span></RemoveButton>
      <ItemName style={{ opacity: checked ? '.5' : '1' }}>{name}</ItemName>
    </Item>
  )
}

export default ListItem
