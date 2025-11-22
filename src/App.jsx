import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const name = "kashish Bansal";
  let x = 10;
  let y = 20;
  const userArray=['kashish','golu','mahi']
  const userObj={
    name:"kasmit",
    email:"anil@234.com",
    age:20
  }

  function fruit(){
    return "Mango"
  }
  function operation(a,b ,op){
    if(op=="+"){
    return a+b;
    }
    else if (op=="-"){
      return a-b;
    }else {
      return a*b
    }
  }
  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name}</h1>
      <h3>{x + y}</h3>
      <h1>{fruit()}</h1>
      <h1>{operation(20,10,"-")}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userArray[1]}</h1>
    </div>
  );
}

export default App;
