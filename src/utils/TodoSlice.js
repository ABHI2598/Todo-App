import { createSlice, nanoid } from "@reduxjs/toolkit";




const TodoSlice = createSlice({
    name : 'todoSlice',
    initialState: {
        todos:[{id:1, text:"Hello"}],
    },
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text : action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload.id)
        }
    }
    

});

export const {addTodo,removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;