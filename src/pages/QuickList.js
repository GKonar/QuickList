import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import AddItemForm from '../components/AddItemForm';

const ListWrap = styled.section`
  height: 100vh;
  /* background-color: #4bcffa; */
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
