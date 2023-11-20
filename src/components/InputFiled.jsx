import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

function InputFiled({text, handleChange}){
   const dispatch = useDispatch();

   
   function addAndResetTodo(){
   dispatch(addTodo({text}))
   handleChange("")
   }

    return(
        <label>
            <input value={text} type="text" onChange={(e) => handleChange(e.target.value) } />
            <button onClick={addAndResetTodo}>Add todo</button>
        </label>
    );
}

export default InputFiled