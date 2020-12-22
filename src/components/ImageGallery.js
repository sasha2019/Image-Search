import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          largeImgUrl={image.largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;