import PropTypes from 'prop-types';

function ImageGalleryItem({ imageUrl, largeImgUrl, onOpenModal }) {
  return (
    <li className="ImageGalleryItem">
      <img 
      src={imageUrl} 
      alt="" 
      className="ImageGalleryItem-image" 
      onClick={onOpenModal}
      data-url={largeImgUrl} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
