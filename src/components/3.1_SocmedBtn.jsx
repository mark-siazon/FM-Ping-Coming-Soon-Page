import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocmedBtn = ( {href, icon, size} ) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" 
            className={`
                text-secondary-paleBlue flex justify-center content-center 
                min-w-[58px] py-[12px] rounded-full 
                border border-secondary-paleBlue/75
                hover:text-white hover:bg-primary hover:transition-all duration-700 focus:bg-primary focus:text-white
                `}>
            <FontAwesomeIcon icon={icon} size={size} />
        </a>
    );
};

export default SocmedBtn;