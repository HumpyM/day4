import './App.css';
import React, {useState, createContext} from 'react';

import Parent from './components/Parent';
import Form from './Form';

const UserContext = createContext()

function App() {
  const [counter, setCounter] = useState(0)
  const providercount = {counter, setCounter}
  return (
    
    <div className="App">
      <h2>Form</h2>
      <Form/>
      <UserContext.Provider value={providercount}>
        <Parent/>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
export {UserContext};