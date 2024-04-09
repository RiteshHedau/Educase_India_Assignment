import React from 'react'
import './SignUp.css'
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
let navigate=useNavigate();

function Profile(){
  navigate("/Profile");
} 

  return (
    <div className='create-acc'>
       <div className="SignUp-form">
          <h1>Create your PopX Account</h1>
          <div className="input-form">
            <label className='label' htmlFor="name">Full Name<span>*</span></label>
            <input className='input' type="text" 
            name='name' placeholder='Marry Doe' value="" />
            <label className='label' htmlFor="name">Phone Number<span>*</span></label>
            <input className='input' type="number" 
            name='number' placeholder='Marry Doe' value="" />
            <label className='label' htmlFor="name">Email Address<span>*</span></label>
            <input className='input' type="text" 
            name='name' placeholder='Marry Doe' value="" />
            <label className='label' htmlFor="password">Password<span>*</span></label>
            <input className='input' type="password" 
            name='password' placeholder='Marry Doe' value="" />
            <label className='label' htmlFor="cmp-name">Company Name</label>
            <input className='input' type="text" 
            name='cmp-name' placeholder='Marry Doe' value="" />
            <div className='bottom-block'>
            <label htmlFor="">Are you an agency?<span>*</span></label>
            <div className='input-radio'>

            <input type="radio" 
            name="yes"/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="No"/>
            <label htmlFor="No">No</label>
            </div>
            </div>
            <button className='input btn' type="button" onClick={Profile}>Create Account</button>
          </div>
       </div>
    </div>
  )
}

export default SignUp
