import { useEffect, useState } from 'react';
import NewTasksList from '../NewTasksList/NewTasksList';

function TasksList() {
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
    <div className="App">
  {state &&(state.message&&(state.message.tasks && state.message.tasks.map(e=><h1>{e.username}</h1>)))}
  <NewTasksList/>
    </div>
  );
}

export default TasksList;