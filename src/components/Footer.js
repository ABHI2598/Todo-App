import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";


const Footer = () => {
    const {darkMode} = useContext(ThemeContext);

    return(
        <div className={darkMode ? "dark" : ""}>
           <div className="dark:bg-gray-800 h-screen"></div>      
        </div>
    )
}


export default Footer;