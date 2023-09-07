import React, { useContext, useEffect, useState } from "react";

import Favicon from "../assets/oval.png";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../utils/TodoSlice";
import ThemeContext from "../context/ThemeContext";

const Todos = () => {
    const [text , setText] = useState("");
    const storedTodos = useSelector(store => store.todoSlice.todos);
    const {darkMode} = useContext(ThemeContext);
     
    const dispatch = useDispatch();
    const handleAdd = () =>{
        dispatch(addTodo(text));
        setText("");
    }

    const debounce = (call,d) => {
        let timer;
        return function()
        {
           let context = this,
           args = arguments
           if(timer) clearTimeout(timer);
           timer = setTimeout(() =>{
            call.apply(context,args);
           },d);
        }
    }
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    
    return(
        <div className={darkMode ? "dark" : ""}>
        <div className="absolute top-[24%] left-[30%] right-[35%]">
            <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-700 dark:border-gray-700 dark:text-gray-400" placeholder="Create a new todo..." value={text} onChange={handleChange}/>
        </div>
        <div className="absolute top-[24.3%] left-[59.6%] right-[31%]">
                <button className="py-2 px-2 w-20 border bg-blue-600 hover:bg-blue-400 focus:ring-1 focus:outline-none focus:ring-blue-300 text-white font-bold border-grey-500 rounded-full " onClick={()=> handleAdd()}>Add</button>
        </div>

        <div className="absolute top-[35%] left-[30%] right-[35%] ">
             {storedTodos.map((todo)=>(

                <Todo item={todo} key={todo.id} />
             ))}
             
        </div>
        </div>

    );
}


export default Todos;