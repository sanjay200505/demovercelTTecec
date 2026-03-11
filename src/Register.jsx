import axios from "axios";
import { useState } from "react";

function Register(){
    
  const[data,setData] = useState({
    username:"",
    email:"",
    psw:""
  });

  const changeName = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const submit = async () =>{
    try{
      const res = await axios.post("https://new-jtq0.onrender.com",data);
      alert(res.data);
    }
    catch(err){
      alert(err.response.data);
    }
  }

  return(
    <div>
      <h1>Hi I am App</h1>
      <input type="text" name="username" onChange={changeName}/>
      <br />
      <input type="text" name="email" onChange={changeName}/>
      <br />
      <input type="password" name="psw" onChange={changeName}/>
      <br />
      <button onClick={submit}>Register</button>
    </div>
  );
}
export default Register;

