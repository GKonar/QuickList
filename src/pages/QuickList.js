import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import AddItemForm from '../components/AddItemForm';

// import light from '../assets/backgrounds/what-the-hex.png';
// import dark from '../assets/backgrounds/what-the-hex-dark.png';

import light1 from '../assets/backgrounds/beanstalk.png';
import dark1 from '../assets/backgrounds/beanstalk-dark.png';


const ListWrap = styled.section`
  height: 100vh;
  background-image: url(${light1}); /* for the first mode */
`
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.margin.regular};
`

function QuickList() {



  return (
    <ListWrap>
      <Navbar />
      <InputWrap>
        <AddItemForm />
      </InputWrap>
    </ListWrap>
  )
}

export default QuickList;
