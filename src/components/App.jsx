import React from 'react';
import { Button } from './button/Button';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import { Searchbar } from './searchbar/Searchbar';
import { fetchImage } from '../services/api';

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
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     const res = await fetchImage();
  //     console.log(res);
  //     this.setState({ images: res.hits });
  //     this.setState({ products: res });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.q !== prevState.q) {
      this.setState({ isLoading: true });

      try {
        const res = await fetchImage({
          page: this.state.page,
          q: this.state.q,
        });
        this.setState(prev => ({
          images: [...prev.images, ...res.hits],
        }));
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

  render() {
    const { images, isLoading, isOpen, selectedImage } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar setQuery={this.handleSetQuery} />
        <ImageGallery images={images} />
        <Loader />
        {images.length ? <Button onClick={this.handleLoadMore} /> : null}

        <Modal />
      </div>
    );
  }
}
