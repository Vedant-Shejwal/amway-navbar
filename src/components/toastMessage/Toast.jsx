import React, { useEffect } from 'react';
import { BsCheckCircle } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
import './Toast.css';

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 300000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div className={`toast-container ${isShown ? "show" : ""}`}>
      <div className={`toast ${type}`}>
        <div className="toast-icon">
          {type === "success" ? (
            <BsCheckCircle className="icon" />
          ) : (
            <MdErrorOutline className="icon" />
          )}
        </div>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
};

export default Toast;
