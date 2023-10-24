import React from 'react';
import styled from 'styled-components';

export const Button = () => {
  return <StyledButton>Button</StyledButton>;
};

const StyledButton = styled.button`
  padding: 5px 30px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0px black;
  background-color: lightseagreen;
  font-size: 20px;
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0px 0px black;
    background-color: rgba(32, 178, 170, 0.8);
  }
`;
