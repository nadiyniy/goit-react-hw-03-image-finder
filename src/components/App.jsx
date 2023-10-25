import React from 'react';
import { Button } from './button/Button';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Modal } from './modal/Modal';
import { Searchbar } from './searchbar/Searchbar';
import { fetchImage } from '../services/api';
import { Watch } from 'react-loader-spinner';

export class App extends React.Component {
  state = {
    images: [],
    isOpen: false,
    isLoading: false,
    selectedImage: null,
    total: null,
    page: 1,
    per_page: 12,
    q: '',
    totalHits: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.q !== prevState.q) {
      this.setState({ isLoading: true });

      try {
        const res = await fetchImage({
          page: this.state.page,
          q: this.state.q,
          totalHits: this.state.totalHits,
        });

        this.setState(prev => ({
          images: [...prev.images, ...res.hits],
          totalHits: res.totalHits,
        }));
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleSetQuery = q => {
    this.setState({ q, images: [], page: 1 });
  };

  handleToggleModal = selectedImage => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
      selectedImage: selectedImage,
    }));
  };

  render() {
    const { images, isLoading, isOpen, selectedImage, totalHits } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Searchbar setQuery={this.handleSetQuery} />
        {!images.length && <p>start you search...</p>}
        {images.length ? <p>You find {totalHits}</p> : null}
        {isLoading && !images.length ? (
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Watch
              height="180"
              width="180"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <ImageGallery
            handleToggleModal={this.handleToggleModal}
            images={images}
          />
        )}
        {totalHits > images.length ? (
          <Button isLoading={isLoading} onClick={this.handleLoadMore} />
        ) : null}
        {this.state.isOpen ? (
          <Modal
            closeModal={this.handleToggleModal}
            selectedImage={selectedImage}
          />
        ) : null}
      </div>
    );
  }
}
