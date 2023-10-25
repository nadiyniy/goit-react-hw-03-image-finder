import React from 'react';
import styled from 'styled-components';

export class Searchbar extends React.Component {
  state = {
    searchValue: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setQuery(this.state.searchValue);
  };
  handleOnChange = e => {
    this.setState({ searchValue: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <StyledHeader className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleOnChange}
            className="input"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  background-color: lightseagreen;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid black;

  & form {
    display: flex;
    gap: 10px;
    max-width: 500px;
    min-width: 280px;
    width: 100%;

    & input {
      width: 100%;
      padding: 10px 30px;
      border: 1px solid black;
      border-radius: 5px;
      box-shadow: 0 0 3px 1px black;
      &::placeholder {
        text-align: center;
      }
      @media screen and (max-width: 768px) {
        padding: 5px 30px;
      }

      &:hover {
        border: 1px solid gray;
      }
      &:focus {
        border: 1px solid gray;
        outline: none;
      }
    }
  }
`;
