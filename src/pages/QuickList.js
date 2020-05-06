import React, { useContext, useRef } from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import AddItemForm from '../components/AddItemForm';
import ListItem from '../components/ListItem';

import { sizes } from '../helpers/sizes';

// import light from '../assets/backgrounds/what-the-hex.png';
// import dark from '../assets/backgrounds/what-the-hex-dark.png';

import light1 from '../assets/backgrounds/restaurant_icons.png';
import dark1 from '../assets/backgrounds/beanstalk-dark.png';

import { ItemsContext } from '../context/items.context';

const ListWrap = styled.section`
  height: 100vh;
  background-image: url(${light1}); /* for the first mode */
`

const MainContent = styled.div`
  max-width: 450px;
  margin: 0 auto;

  ${sizes.mobileL} {
    margin: 0 ${({ theme }) => theme.margin.default};    
  }
`

const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.margin.default} 0;
`

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`

const AddItemPrompt = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.color.main};
  opacity: .6;
  cursor: pointer;
  font-size: 30px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ClearItemsButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.warning};
  font-family: inherit;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0 ${({ theme }) => theme.padding.between};
  padding-top: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  transition: .2s;
  outline: none;
  opacity: .7;

  &:hover {
    box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);
    background-color: ${({ theme }) => theme.color.warningHover};
    opacity: 1;
  }
`

function QuickList() {
  const { items, clearList } = useContext(ItemsContext);
  const inputRef = useRef();

  return (
    <ListWrap>
      <Navbar />
      <MainContent>
        <FormWrap>
          <AddItemForm ref={inputRef} />
        </FormWrap>
        <ItemsList>
          {
            items.length > 0 ?
              items.map((item, i) => {
                return (
                  <ListItem name={item.name} key={i} id={item.id} />
                )
              }) : (
                <AddItemPrompt onClick={() => inputRef.current.focus()}>Start Adding Items</AddItemPrompt>
              )
          }
        </ItemsList>
        <ButtonContainer>
          { // clear items button
            items.length > 0 && <ClearItemsButton onClick={clearList}>CLEAR</ClearItemsButton>
          }
        </ButtonContainer>
      </MainContent>
    </ListWrap >
  )
}

export default QuickList;
