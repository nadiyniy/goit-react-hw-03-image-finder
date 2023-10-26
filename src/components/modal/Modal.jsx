import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    closeModal: propTypes.func.isRequired,
    selectedImage: propTypes.object.isRequired,
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOutside = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { closeModal, selectedImage } = this.props;

    return (
      <StyledWrapper onClick={this.handleClickOutside}>
        <StyledContent>
          <button onClick={closeModal}>X</button>

          <div>
            {' '}
            <StyledImage
              src={selectedImage.largeImageURL}
              alt={selectedImage.tags}
              width={770}
              height={700}
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
  height: auto;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 0 10px;
  & div {
    height: 500px;
  }
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
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
