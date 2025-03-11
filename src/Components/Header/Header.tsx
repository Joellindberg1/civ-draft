import React from "react";

import './Header.scss'

interface HeaderProps {
  text: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ text, className = "" }) => {
  return (
    <header 
      className={`Header ${className}`}>
      {text}
    </header>
  );
};

export default Header;