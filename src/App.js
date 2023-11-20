
import { useState } from 'react';
import './App.css';
import InputFiled from './components/InputFiled';
import TodoList from './components/TodoList';


function App() {

  const [text, setText] = useState("");
  
  return (
    <div >
      <InputFiled  text={text} handleChange={setText}/>
     <TodoList />
    </div>
  );
}

export default App;
