import React, { useContext, forwardRef } from 'react';
import useInputState from '../hooks/useInputState';
import styled from 'styled-components';
import { sizes } from '../helpers/sizes';
import { ItemsContext } from '../context/items.context';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const StyledInput = styled.input`
  display: flex;
  width: 80%;
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

  &::placeholder {
    opacity: .4;
    padding-left: ${({ theme }) => theme.padding.xsmall};
  }
  
  ${sizes.mobileL} {
    width: 75%;  
  }
  ${sizes.mobileS} {
    width: 70%;  
  }
`

const StyledButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.bigger};
  width: 60px; 
  height: 60px; 
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

function Input(props, ref) {
  const { addItem } = useContext(ItemsContext);
  const [value, setValue, reset] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') return
  }

  const handleAddItem = () => {
    addItem(value);
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput onChange={setValue} type="text" name="search" value={value} placeholder='Add item...' ref={ref} />
      <StyledButton onClick={handleAddItem} type="submit"><span>+</span></StyledButton>
    </StyledForm>

  )
}

export default forwardRef(Input);
