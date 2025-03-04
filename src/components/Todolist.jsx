
import { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import Edit from './Edit';

uuidv4()

const Todolist = () => {
    const [todoValue, setTodo] = useState([]);
    const createTodo=(todo)=>{
        setTodo([...todoValue,{id:uuidv4(),task:todo,isEditing:false}])
    }
    const deleteTodo=(id)=>{
        setTodo(todoValue.filter(todo=>todo.id!==id))
    }
    const editTodo=(id)=>{
        setTodo(todoValue.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask=(task,id)=>{
        setTodo(todoValue.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div className='container bg-blue-950 mt-20 p-8 rounded-md'>
      <Form  createTodo={createTodo}/>
      {
        todoValue.map((todo, index) => (
            todo.isEditing?(<Edit editTodo={editTask} key ={index} task={todo}/>
            ):(<Todo task={todo} key={index} 
            deleteTodo={deleteTodo} editTodo={editTodo}/>
            )
            
                
        ))
        }
    </div>
  );
};

export default Todolist;
