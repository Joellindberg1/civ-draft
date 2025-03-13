import React from "react";

import styles from './BanButton.module.scss'


interface BanButtonProps {
  isBanned: boolean;
  onClick: () => void;
}

const BanButton: React.FC<BanButtonProps> = ({ isBanned, onClick }) => {
  return (
    <button className={styles.banButton} onClick={onClick}>
      {isBanned ? "Unban" : "Ban"}
    </button>
  );
};

export default BanButton;