import React from "react";
import SocmedBtn from "./3.1_SocmedBtn";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"; 

const SocmedBtnSect = () => {
    return (
        <section className="mb-9 flex flex-row gap-5">
            <SocmedBtn 
                href="https://facebook.com/fb.iron.markk" 
                icon={faFacebookF} 
                size="2x" 
                label="Visit Facebook Profile"
            />
            <SocmedBtn 
                href="https://x.com/iron_markk" 
                icon={faXTwitter} 
                size="2x" 
                label="Visit X (Twitter) Profile"
            />
            <SocmedBtn 
                href="https://instagram.com/iron_markk" 
                icon={faInstagram} 
                size="2x" 
                label="Visit Instagram Profile"
            />
        </section>
    );
};

export default SocmedBtnSect;