import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

export class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={s.backDrop}>
        <div className={s.content}>{children}</div>
      </div>,
      document.getElementById('modalRoot'),
    );
  }
}
