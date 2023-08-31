import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";



const Store = configureStore({
    reducer:{
        todoSlice: TodoSlice,
    }
})


export default Store;