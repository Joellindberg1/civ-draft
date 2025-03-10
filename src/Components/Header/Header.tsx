import React from "react";

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