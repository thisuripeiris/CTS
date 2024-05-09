// import React from 'react';
// import ReactDOM from 'react-dom';

// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1000,
// };
// const OVERLAY_STYLES = {
//     position: 'fixed',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: 'rgba(0, 0, 0, .7)',
//     zIndex: 1000
// };
// const Modal = ({ children, onClose }) => {
//     return ReactDOM.createPortal(
//         <>
//             <div style={OVERLAY_STYLES} onClick={onClose} />
//             <div style={MODAL_STYLES}>
//                 {children}
//             </div>
//         </>,
//         document.getElementById('cart-root')
//     );
// };
// export default Modal;

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
