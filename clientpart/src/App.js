import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({})
  useEffect(()=>{
    (async()=>{let response = await fetch("http://localhost:3000/uxcandy.com/~shapoval/test-task-backend/v2/?developer=Salman", {
      method: 'GET',
      credentials: 'include',
    })
    const result = await response.json();
    setState(result)
  })()
},[])
console.log(state);
  return (
    <div className="App"> dsvasdva
  {state &&(state.message&&(state.message.tasks && state.message.tasks.map(e=><h1>{e.username}</h1>)))}
    </div>
  );
}

export default App;
