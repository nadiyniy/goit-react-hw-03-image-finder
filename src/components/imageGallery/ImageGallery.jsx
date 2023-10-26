import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, handleToggleModal }) => {
  return (
    <StyledWrapperDiv>
      <StyledListUl>
        {images.map((image, idx) => {
          return (
            <ImageGalleryItem
              handleToggleModal={() => handleToggleModal(image)}
              tags={image.tags}
              key={idx}
              avatar={image.webformatURL}
            />
          );
        })}
      </StyledListUl>
    </StyledWrapperDiv>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  handleToggleModal: propTypes.func.isRequired,
};

const StyledWrapperDiv = styled.div`
  padding: 20px 50px;
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
const StyledListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  justify-content: flex-start;
  padding: 0;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;
