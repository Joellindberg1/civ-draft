import React from "react";
import { useLocation } from "react-router-dom"

import './Footer.scss'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    const location = useLocation();

    const patch = "1.1.0"
    const defaultText = "© 2024 Civ7 Drafter. All rights reserved."
    const patchText = `Updated until patch ${patch}` 
    const draftComplete = "Thanks for using Civ 7 Drafter, please leave a comment and rating so we can continue developing towards a better drafter."

    return (
        <footer className={`footer ${className}`}>
            <p>{defaultText}</p>
            <p>{patchText}</p>
            {location.pathname === "/FinalDraft" && <p>{draftComplete}</p>} 
        </footer>
    );
};


export default Footer;