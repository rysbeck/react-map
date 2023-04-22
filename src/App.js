/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./style.scss"
import Services from "./components/Services"
import Benefits from "./components/Benefits"
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const {users, setUsers} = useState([]);
  useEffect(()=>{
  axios("https://jsonplaceholder.typicode.com/users")
      .then((data)=>setUsers(data))
      .catch((err)=>console.log(err))
      console.log(1);
  }, [count])

  

  return (
    <>
      <div onClick={()=>setCount(item => item + 1)}>{count}</div>
      <Services/>
      <Benefits/>
    </>
  );
}

export default App;
