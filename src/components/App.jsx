import React from 'react';
import { Button } from './button/Button';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import { Searchbar } from './searchbar/Searchbar';
const url =
  'https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg';

const API_KEY = '40246120-635cf6b51d07f62c2e22f19b9';

const urlPhoto =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&psig=AOvVaw1GBjvDVsSlf7O2yNtteeyb&ust=1698244806800000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDEpIX1joIDFQAAAAAdAAAAABAE';

const array = [url, url, url, url, url, url, url, url, url, url];

export class App extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery avatar={array} />
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
