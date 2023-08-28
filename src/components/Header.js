import React, { Fragment } from "react";

import bgImage from "../assets/bg-desktop-light.jpg";
import moon from "../assets/icon-moon.svg";


const Header = () => {
    return(
        <Fragment>
             <div className="relative">
             <div>
                <img className="w-full h-5/6" src={bgImage}/>
             </div>
             <div className="absolute top-1/4 left-1/4">
                  <h2 className="text-3xl font-serif text-white font-extrabold">T O D O</h2>
                  <img  src={moon}/>
             </div>
             
             </div>

             
        </Fragment>
    )
}


export default Header;