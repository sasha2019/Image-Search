import { Component } from 'react';
import PropTypes from 'prop-types';


export default class Modal extends Component {
  static propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

componentDidMount() {
  window.addEventListener('keydown', this.closeModalByKey);
}

componentWillUnmount() {
  window.removeEventListener('keydown', this.closeModalByKey);
}

closeModalByKey = (e) => {
  if (e.code === 'Escape') {
    this.props.onClose();
  }
};

  render() {
    return (
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
}
}
