import { useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom';

const Signupform = () => {
   const [email, setemail] = useState('');
   const [emailerror ,setemailerror] = useState(false)
   const [password, setpassword] = useState('');
   const [confirmpassword, setconfirmpassword] = useState('');
   const [passwordError, setPasswordError] = useState(false)
   const handleemail = (event) => {
      setemail(event.target.value);
   }

   const handlepassword = (event) => {
      setpassword(event.target.value);
   }

   const handleconfirmpassword = (event) => {
      setconfirmpassword(event.target.value);
   }
   const handlesubmit =()=>{

      const splitemail = email.split('@')
      const name = splitemail[0] 
      const splitemail2 = splitemail[1].split('.')
      const host = splitemail2[0]
      const domain = splitemail2[1]
      console.log(splitemail)
      
         setemailerror((name=='' || host=='' || domain ==''))
      
         setPasswordError(password !==confirmpassword)
    
   }



   return (
      <div className='main'>
         <div className="container">
            <h1>Signup</h1>
            <input className={emailerror ? "emailerror" : "email" } type="text" value={email}
               onChange={handleemail} placeholder='Email'></input>

            <input className={passwordError ? "password error" : "password"} type="password"
               value={password} onChange={handlepassword} placeholder='create password'></input>

            <input className={passwordError ? "password error" : "password"} type="password"
               value={confirmpassword} onChange={handleconfirmpassword}
               placeholder='confirm password'></input>

            <div className='subcontainer'>
               <p>Already have an account?</p>
               <Link className='link' to="/Login">Login</Link>

            </div>
            <button onClick={handlesubmit} className="signup">signup</button>
         </div>
      </div>
   )


}

export default Signupform;