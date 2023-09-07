import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../utils/TodoSlice';
import ThemeContext from '../context/ThemeContext';

function Todo({item}) {
  const dispatch = useDispatch();
  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""} >
    <ul className='list-none bg-white border border-gray-50 rounded-sm flex dark:border-slate-900 '>
       <li className='items-center justify-center font-sans text-lg font-normal py-1 px-2 block w-full bg-white border border-gray-200  focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-700 dark:border-black dark:border-gray-700 dark:text-white'>
             {item.text}
          <button className='text-white  bg-red-400 border rounded-md px-2 py-1 float-right' onClick={() => dispatch(removeTodo(item))}>Delete</button>
       </li>
    </ul>
    </div>
  )
}

export default Todo;