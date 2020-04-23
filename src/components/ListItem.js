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
  justify-content: space-between;
  transition: 3s;
`

const ItemName = styled.p`
  transition: 3s;
`

const NameWrap = styled.div`
  display: flex;
  align-items: center;
`

const RemoveButton = styled.button`
  margin: ${({ theme }) => theme.margin.xsmall} 0;
  color: #fff;
  font-weight: 800;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ff3f34;
  background-color: #ff7675;
  cursor: pointer;

  span {
    svg {
      width: 100%;
      height: 100%;
      fill: #fff;
    }
  }
`

const Checkbox = styled.input`
  margin: ${({ theme }) => theme.margin.small}  0;
`

function ListItem({ name, id }) {
  const { removeItem } = useContext(ItemsContext);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e, checked) => {
    setChecked(e.target.checked);
  }

  return (
    <Item style={{ order: checked ? '1' : '-1' }}>
      <NameWrap>
        <Checkbox type="checkbox" onChange={(e) => handleCheck(e, checked)} checked={checked} />
        <ItemName style={{ opacity: checked ? '.5' : '1' }}>{name}</ItemName>
      </NameWrap>
      <RemoveButton onClick={() => removeItem(id)}><span><Bin /></span></RemoveButton>
    </Item>
  )
}

export default ListItem;
