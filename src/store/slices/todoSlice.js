import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todo",
    initialState:{
        todos: [
            {id: 1, text: "first todo"},
            {id: 2, text: "second todo"},
        ],
        count: 0,
    },
    reducers: {
        addTodo(state, action) {
            action.payload.text &&
           state.todos.push({
            id: Math.floor(Math.random() * 999),
            text:action.payload.text,
           });
        },
        removeTodo(state, action)  {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addTodo ,removeTodo } = todoSlice.actions;

export default todoSlice.reducer;