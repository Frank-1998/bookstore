import React from "react";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${open? "scale-100 opacity-100" : "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
