import React, { useEffect, useState } from "react";
import styles from "./WarningInfo.module.scss";

interface WarningInfoProps {
  message: string;
  duration?: number; // 🔥 Standardtid: 3 sekunder
}

const WarningInfo: React.FC<WarningInfoProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null; // 🔥 Om inte `visible` är true → Visa inget

  return <div className={styles.warningBox}>{message}</div>;
};

export default WarningInfo;
