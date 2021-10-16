import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape)
  }

  componentDidUpdate(prevProps, prevState) {
   }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape)
  }
  
  handleClose = (e) => {
  if (e.currentTarget === e.target) {
    this.props.toggleModal();
  }
  }

  handleEscape = e => {
  if (e.code === "Escape") {
      this.props.toggleModal()}
 }

  render() {
    const { children} = this.props;
    return createPortal(
      <div className={s.backDrop} onClick={this.handleClose}>
        <div className={s.content}>{children}</div>
      </div>,
      document.getElementById('modalRoot'),
    );
  }
}
