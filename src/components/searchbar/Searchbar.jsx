import React from 'react';
import styled from 'styled-components';

export const Searchbar = () => {
  return (
    <StyledWrapperDiv>
      <input name="search" placeholder="Enter search request"></input>
    </StyledWrapperDiv>
  );
};

const StyledWrapperDiv = styled.div`
  background-color: lightseagreen;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 10px;
  & input {
    width: 250px;
    padding: 5px 20px;
    border-radius: 10px;
    border: 1px solid black;
    &:hover {
    }
  }
`;
