import React from "react";

import Favicon from "../assets/checkbox.png";
import Todo from "./Todo";


const Todos = () => {
    return(
        <div>
        <div className="absolute top-[24%] left-[30%] right-[35%]">
            <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Create a new todo..." />
        </div>
        <div className="absolute top-[24.3%] left-[59.6%] right-[31%]">
                <button className="py-2 px-2 w-20 border bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold border-grey-500 rounded-full  ">Add</button>
        </div>

        <div className="absolute top-[35%] left-[30%] right-[35%] ">
             <Todo/>
             <Todo/>
             <Todo/>
             <Todo/>
             <Todo/>
             <Todo/>
             <Todo/>
             <Todo/>
             
        </div>
        </div>

    );
}


export default Todos;