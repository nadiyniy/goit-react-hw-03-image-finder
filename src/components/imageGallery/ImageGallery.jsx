import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import React from 'react';
import styled from 'styled-components';

export const ImageGallery = ({ avatar }) => {
  return (
    <StyledWrapperDiv>
      <StyledListUl>
        {avatar.map((pic, idx) => {
          return <ImageGalleryItem key={idx} avatar={pic} />;
        })}
      </StyledListUl>
    </StyledWrapperDiv>
  );
};
const StyledWrapperDiv = styled.div`
  padding: 20px 50px;
`;
const StyledListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  justify-content: flex-start;
`;
