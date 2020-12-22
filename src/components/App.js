import { Component } from 'react';

import { fetchImagesByQuery } from '../services/galleryApi';

import Searchbar from './Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import Button from './Button'
import Modal from './Modal'

export default class App extends Component {
  state = {
    images: [],
    query: '',
    loading: false,
    error: null,
    page: 1,
    modalvisible: false,
    largeImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.images !== prevState.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  
  fetchImages = () => {
    this.setState({ loading: true, error: null });

    fetchImagesByQuery(this.state.query, this.state.page)
      .then((res) =>
        this.setState((prevState) => {
          return {
         images: [...prevState.images, ...res],
         page: prevState.page + 1,
          };
        })    
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearch = (searchQuery) => {
    this.setState(
      {
        query: searchQuery,
        images: [],
        page: 1,
      },
      this.fetchImages
    );
  };

  showModal = (e) => {
  const imageUrl = e.target.dataset.url;

  this.setState({
    modalVisible: true,
    largeImageUrl: imageUrl,
  })
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
      largeImageUrl: '',
    })
  }

  render() {
    const { images, loading, error, modalVisible, largeImageUrl } = this.state;

    return (
      <div className="App">
        <Searchbar onSearch={this.handleSearch} />

        {error && <h3>Error</h3>}

        {loading && <Loader />}

        {modalVisible && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageUrl} alt="" />
          </Modal>
        )}

        <ImageGallery images={images} onOpenModal={this.showModal} />

      {images.length > 0 && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}