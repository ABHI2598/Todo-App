import React, { useState } from "react";

import Favicon from "../assets/oval.png";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../utils/TodoSlice";


const Todos = () => {
    const [text , setText] = useState();
    const storedTodos = useSelector(store => store.todoSlice.todos);
     
    const dispatch = useDispatch();
    const handleAdd = () =>{
        dispatch(addTodo(text));
        setText("");
    }
    return(
        <div>
        <div className="absolute top-[24%] left-[30%] right-[35%]">
            <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Create a new todo..." value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="absolute top-[24.3%] left-[59.6%] right-[31%]">
                <button className="py-2 px-2 w-20 border bg-blue-500 hover:bg-blue-400 focus:ring-1 focus:outline-none focus:ring-blue-300 text-white font-bold border-grey-500 rounded-full  " onClick={()=> handleAdd()}>Add</button>
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