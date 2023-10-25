import React, { Component } from 'react';
import styled from 'styled-components';

export class Modal extends Component {
  render() {
    const { closeModal, selectedImage } = this.props;

    return (
      <StyledWrapper>
        <StyledContent>
          <button onClick={closeModal}>X</button>

          <div>
            {' '}
            <StyledImage
              src={selectedImage.largeImageURL}
              alt={selectedImage.tags}
            />
          </div>
        </StyledContent>
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContent = styled.div`
  width: 800px;
  height: 600px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  & button {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    margin-left: auto;
    display: block;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 0 3px 1px black;
    }
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
  }
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
