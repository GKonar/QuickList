import React, { useState } from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
`
const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.default};
  border: none;
  border-radius: 5px;
  outline: none;
  transition: .1s;
  border: 2px solid #6ab04c;

  &:hover {
    border: 2px solid #6ab04c;
  }

  &:focus {
    border: 4px solid #6ab04c;
  }
`

const StyledButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.bigger};
  margin-left: ${({ theme }) => theme.margin.regular};
  width: 60px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  outline: none;
  background-color: #badc58;
  box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.75);
  transition: .2s;

  &:hover {
    box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);
    background-color: #6ab04c;
  }

  &:active {
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
  }

  span {
    position: relative;
    top: -2px;
    left: 1px;
    font-weight: 800;
    color: #fff;
  }
`

function Input() {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      console.log(value);
    }
    setValue('');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput onChange={handleChange} type="text" name="search" value={value} />
      <StyledButton type="submit"><span>+</span></StyledButton>
    </StyledForm>
  )
}

export default Input
