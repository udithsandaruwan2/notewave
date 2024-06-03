import React from 'react';
import { XCircle } from 'react-bootstrap-icons';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-950 rounded-lg p-4 w-1/2">
        <button className="float-right text-white text-2xl" onClick={onClose}>
          <XCircle/>
        </button>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
