import { useState } from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
const Login = () => {
 const [email ,setemail] = useState('');
 const [password ,setpassword] = useState('');
 
 const handleemail = (event)=>{
    setemail(event.target.value);
 }

 const handlepassword = (event)=>{
    setpassword (event.target.value);
 }

 

    return (
    <div className='main'>
           <div className="container">
            <h1>Login</h1>
           <input className ="email" type="email" value={email} 
           onChange={handleemail} placeholder='Email'></input>

           <input className ="password" type="password" 
           value={password} onChange={handlepassword} placeholder='create password'></input>
           
          <div className='subcontainer'>
          <p>Don't have an account?</p>
            <Link className='link' to="/Signup">Signup</Link>

          </div>

            <button className ="login">login</button>
           </div>
    </div>
    )


}

export default Login;