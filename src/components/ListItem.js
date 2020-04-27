import React, { useContext } from 'react';
import styled from 'styled-components';
import { ItemsContext } from '../context/items.context';
import { ReactComponent as Bin } from '../assets/icons/bin.svg';
import useToggle from '../hooks/useToggle';


const Item = styled.li`
  list-style-type: none;
  font-weight: 700;
  color: #6ab04c;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ItemName = styled.p`
  transition: 1s;
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
  margin: ${({ theme }) => theme.margin.xsmall};
  position: relative;
  top: -1px;
`

function ListItem({ name, id }) {
  const { removeItem } = useContext(ItemsContext);
  const [checked, setChecked] = useToggle(false);

  return (
    <Item style={{ order: checked ? '1' : '-1' }}>
      <NameWrap>
        <Checkbox type="checkbox" onChange={(e) => setChecked(e, checked)} checked={checked} />
        <ItemName style={{ opacity: checked ? '.5' : '1' }}>{name}</ItemName>
      </NameWrap>
      <RemoveButton onClick={() => removeItem(id)}><span><Bin /></span></RemoveButton>
    </Item>
  )
}

export default ListItem;
