import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(){
    const { todos} = useSelector((state) => state.todoStore);
    return(
        <ul>
            {todos.map((todo) =>(
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
        
    
}

export default TodoList