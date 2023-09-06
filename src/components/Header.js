import React, { Fragment, useContext, useState } from "react";

import bgImage from "../assets/bg-desktop-light.jpg";
import moon from "../assets/icon-moon.svg";
import darkImage from "../assets/bg-desktop-dark.jpg";
import sun from "../assets/icon-sun.svg";
import ThemeContext from "../context/ThemeContext";



const Header = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const imagePath = darkMode ? darkImage : bgImage;
    const icon = darkMode ? sun : moon;
    return(
        <div className={darkMode ? "dark" : ""}>
             <div className="relative">
             <div >
                <img className="w-full h-5/6"  src={imagePath}/>
             </div>
             <div className="absolute top-1/4 left-[30%]">
                  <h2 className="text-3xl font-serif text-white font-extrabold">T O D O</h2>
                 
             </div>
             <div className="absolute top-1/4 left-[63%]">
             <img className="cursor-pointer" src={icon} onClick={()=> setDarkMode(!darkMode)}/>
             </div>
             
             </div>

             
        </div>
    )
}


export default Header;