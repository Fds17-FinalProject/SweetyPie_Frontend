import ReactDOM from 'react-dom';
const Modal = ({ children }) =>
  ReactDOM.createPortal(children, document.querySelector('#root'));
export default Modal;