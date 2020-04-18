import React from 'react'
import styled from 'styled-components';

import { ReactComponent as MagicFox } from '../assets/icons/fox.svg';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #3c40c6;
  padding:  ${({ theme }) => theme.padding.regular};
  color: #fff;
  border-bottom: .5rem solid #575fcf;
  border-top: .5rem solid #575fcf;

  svg {
    width: 50px;
    height: 50px;
  }
`

const IconWrap = styled.span`
  width: 50px;
  height: 50px;
  overflow: hidden;
`

const Title = styled.h1`
  font-size:  ${({ theme }) => theme.fontSize.bigger};
  letter-spacing: 2px;
  font-weight: 800;
  margin: 0 ${({ theme }) => theme.margin.small};
  padding-top: 5px;
`

function Navbar() {
  return (
    <Nav>
      <Title>QuickList</Title>
      <IconWrap>
        <MagicFox />
      </IconWrap>
    </Nav>
  )
}

export default Navbar


// THANKS FOR ICON
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>