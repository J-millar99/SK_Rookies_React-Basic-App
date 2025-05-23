import { useState } from "react";

const MyComponentFunc = ({ name, children }) => {
    // 상태변수와 setter 함수 선언하기
    const [value, setValue] = useState(0);
    // const [message, setMessage] = useState('');
    // const [username, setUsername] = useState('');
    const [inputs, setInputs] = useState({
        message: '', username: ''
    })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const { message, username } = inputs;

    return (
        <div>
            <h2>함수형 컴포넌트</h2>
            <h3>Hello! {name} </h3>
            {children}
            <p>상태변수 value={value} </p>
            <button onClick={()=>(setValue(value + 1))}>증가</button>
            <button onClick={()=>(setValue(value - 1))}>감소</button>
            <p>State message의 값 = {message}</p>
            <input name="message" value={message} onChange={handleChange} /> <br/>
            <p>State username의 값 = {username}</p>
            <input name="username" value={username} onChange={handleChange} /> <br/>
        </div>
    );
};

export default MyComponentFunc;