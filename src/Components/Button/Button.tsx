import React from "react";

import './Button.scss'

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
