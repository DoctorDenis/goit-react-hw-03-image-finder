import React from 'react';
import {
  Searchbar,
  ImageGallery,
  Modal,
  Button,
  Error,
  Loader,
  filteredPropertiesArray,
} from '../helpers/exportMap';
import { fetchImages } from '../fetchImages';

class App extends React.Component {
  state = {
    images: [],
    query: '',
    page: 1,
    status: 'resting',
    modalOpened: false,
    imageInfo: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getImagesData();
    }
  }

  getImagesData = () => {
    const { query, page } = this.state;
    this.setState({ status: 'waiting' });

    fetchImages(query, page)
      .then(async data => {
        const ImagesArray = filteredPropertiesArray(data.hits);
        this.setState({
          images: [...this.state.images, ...ImagesArray],
          status: 'ok',
        });
      })
      .catch(error => {
        this.setState({ status: 'error' });
      });
  };

  submitHandler = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    this.setState({ query, page: 1, images: [] });
  };

  openModal = event => {
    const { url, tags } = event.target.dataset;
    this.setState({
      imageInfo: { url, tags },
      modalOpened: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpened: false,
    });
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { status, images, modalOpened, imageInfo, query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.submitHandler} />
        {status === 'error' && <Error />}

        {images.length > 0 && (
          <>
            <ImageGallery images={images} onClick={this.openModal} />
            <Button onClick={this.incrementPage} />
          </>
        )}
        {status === 'waiting' && <Loader />}
        {images.length === 0 && query ? (
          <Error message={`There is no images found on "${query}" query`} />
        ) : (
          <></>
        )}
        {modalOpened && (
          <Modal imageInfo={imageInfo} modalCloseMethod={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
