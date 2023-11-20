import { useDispatch } from "react-redux";
import { removeTodo } from "../store/slices/todoSlice"

function TodoItem({id, text}){
    const dispatch = useDispatch();

    return <li>
        <span>{id} {text}</span><button onClick={() => dispatch(removeTodo({id}))}>X</button>
    </li>
}

export default TodoItem