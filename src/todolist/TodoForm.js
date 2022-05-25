import React, { useRef, useState } from 'react';
import '../css/TodoForm.css'

const TodoForm = ({onAdd}) => {
    const textRef = useRef('') //입력후 input에서 사용해주기 위함
    const [text, setText] = useState('') //  입력값 나타냄
    
    const changeInput = (e)=>{
        const {value} = e.target
        setText(value)
    }

    const onSubmit=(e) =>{
        e.preventDefault() //submit후에 새로고침을 방지

        if(!text) return //입력값이 없으면 실행되지 않게 설정한다.
        onAdd(text)
        setText('') //input에 다시 입력할 수 있게 비우기
        textRef.current.focus() //input란에 포커스
    }
    
    return (
        <form className="TodoForm" onSubmit={onSubmit}>
        <input className="text_1" type="text" value={text} onChange={changeInput} ref={textRef}/>
        <button className="button_1" type="submit">Add</button>
        </form>

    );
};

export default TodoForm;