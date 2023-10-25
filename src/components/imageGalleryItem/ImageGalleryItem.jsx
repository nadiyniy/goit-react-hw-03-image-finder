import React from 'react';
import styled from 'styled-components';

export const ImageGalleryItem = ({ avatar }) => {
  return (
    <StyledItemLi>
      <img src={avatar} alt="tyt" width="200" height="200" />
    </StyledItemLi>
  );
};

const StyledItemLi = styled.li`
  width: calc((100% - 3 * 10px) / 4);
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: calc((100% - 1 * 5px) / 2);
  }
`;
