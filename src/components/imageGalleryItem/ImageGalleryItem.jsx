import React from 'react';
import styled from 'styled-components';

export const ImageGalleryItem = ({ avatar }) => {
  return (
    <StyledItemLi>
      <img src={avatar} alt=" Ce 1" />
    </StyledItemLi>
  );
};

const StyledItemLi = styled.li`
  width: calc((100% - 3 * 10px) / 4);
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
