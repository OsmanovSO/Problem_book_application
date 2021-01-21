import { useState } from 'react';

function NewTasksList() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    text: ''
  });

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/uxcandy.com/~shapoval/test-task-backend/v2/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
       text
      }),
      credentials: 'include'
    });

    
  }


  function handlerChange({ target: { name, value } }) {
    setInputs({
      ...inputs, [name]: value,
    })
  }

  const { username, email, text } = inputs;

  return (
    <div className="blockMain">
      <form onSubmit={handlerSubmit} className="mainFormBlock">

        <input onChange={handlerChange} name="username" value={username} type="text" aria-describedby="firstnameHelp" placeholder="Имя*" required />


        <input onChange={handlerChange} type="text" name="email" value={email} aria-describedby="emailHelp" placeholder="E-mail*" required />

        <input onChange={handlerChange} name="text" value={text} type="text" id="text" aria-describedby="emailHelp" placeholder="Телефон*" required />


        <div className="req"><span>*</span>Поля обязательные для заполнения</div>
        <div className="submBut">
          <button type="submit" className="yellowPulseButton">Зарегистрироваться</button>
        </div>
        <div className="reqBLue">Уже есть аккаунт?</div>
      </form>
    </div>

  );
}


export default NewTasksList;