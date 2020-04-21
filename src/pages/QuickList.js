import React, { useContext } from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import AddItemForm from '../components/AddItemForm';
import ListItem from '../components/ListItem';

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
`

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.margin.default};
`

const ItemsList = styled.ul``



function QuickList() {
  const { items } = useContext(ItemsContext);
  console.log(items)

  return (
    <ListWrap>
      <Navbar />
      <MainContent>
        <InputWrap>
          <AddItemForm />
        </InputWrap>
        <ItemsList>
          {
            items.map((item, i) => {
              return <ListItem name={item.name} key={i} />
            })
          }
        </ItemsList>
      </MainContent>
    </ListWrap>
  )
}

export default QuickList;
