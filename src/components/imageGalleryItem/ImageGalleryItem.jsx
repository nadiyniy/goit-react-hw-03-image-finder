import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({ avatar, tags, handleToggleModal }) => {
  return (
    <StyledItemLi onClick={handleToggleModal}>
      <img src={avatar} alt={tags} width={200} height={200} />
    </StyledItemLi>
  );
};
ImageGalleryItem.propTypes = {
  avatar: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  handleToggleModal: propTypes.func.isRequired,
};

const StyledItemLi = styled.li`
  width: calc((100% - 3 * 10px) / 4);
  border-radius: 10px;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.1s ease;
    &:active {
      scale: 0.8;
    }
  }
  @media screen and (max-width: 768px) {
    width: calc((100% - 1 * 5px) / 2);
  }
`;
