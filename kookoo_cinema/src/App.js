import { render } from '@testing-library/react';
import React,{useState} from 'react';
import Home from './components/Home';

function App() {
    const [comp,setComp]=useState(Home)
    console.log("hey")
return(
    <>
    <header>
        <button onClick={()=>setComp(Home)}>Home</button> 
        <button onClick={()=>setComp(Home)}>About</button>
        <button onClick={()=>setComp(Home)}>Users</button>
    </header>
    </>
);
  
}

export default App;
