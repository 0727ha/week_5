import React, { useRef, useState } from 'react';
import '../css/Todos.css'
import TodoForm from './TodoForm';
import TodoList from './Todolist';


const Todo = () => {
    const no = useRef(1) //할 일(item)의 고유 id가 될 숫자
    const [todo, setTodo] = useState([]) 

	//고유 id값을 받아 해당 item삭제(해당 item을 제외한 값만 필터링)
    const onDel = (id)=>{
        setTodo(todo.filter(todo => todo.id !== id))
    }
	
    //고유 id값을 받아 해당 item의 체크 상태를 설정
    const onToggle= (id)=>{
        setTodo(todo.map(item=> item.id ===id? {...item, check : !item.check } : item))
    }

	//form에 입력받은 값을 새로운 doto item으로 추가
    const onAdd = (text)=>{
        setTodo([
            ...todo,
            {
                id : no.current++,
                text,
                check: false
            }
        ])    
    }
    
    
	//TodoForm컴포넌트에는 onAdd함수만 넘겨주고 List에는 todo객체와 토글,삭제 함수를 넘겨준다
    return (
        <div className="Todos">
            <h1>To do list</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList todo={todo} onToggle={onToggle} onDel={onDel}/>  
        </div>
    );
};

export default Todo;