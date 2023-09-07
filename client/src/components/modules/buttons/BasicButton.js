// BasicButton.js
import React from 'react';
import styles from './BasicButton.module.css';

const BasicButton = ({ bgColor, textColor, onClick, disabled, children }) => {
  const buttonStyle = {
    backgroundColor: bgColor || 'blue',
    color: textColor || 'white',
  };

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children || 'Click me'}
    </button>
  );
};

export default BasicButton;
