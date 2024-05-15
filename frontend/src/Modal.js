import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose, children }) => {
    return ReactDOM.createPortal(
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary">Checkout</button>
                    </div> */}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
