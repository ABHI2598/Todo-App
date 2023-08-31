import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../utils/TodoSlice';

function Todo({item}) {
  const dispatch = useDispatch();
  return (
    <ul className='list-none bg-white border border-gray-50 rounded-sm flex'>
       <li className='items-center justify-center font-sans text-lg font-normal py-1 px-2 block w-full bg-white border border-gray-200  focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'>
             {item.text}
          <button className='text-white bg-red-400 border rounded-md px-2 py-1 float-right' onClick={() => dispatch(removeTodo(item))}>Delete</button>
       </li>
      

    </ul>
  )
}

export default Todo;