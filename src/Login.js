import './Login.css'
import { useNavigate } from 'react-router-dom';


function Login(){
    let navigate=useNavigate();

    function Profile(){
        navigate("/Profile")
    }
    return(<> 
    <div className='form-center'>
    <div className="form">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="input-form">
            <label className='input-label'  htmlFor="email">Email Address</label>
            <input className='input' type="text" name="email" value='' placeholder="Enter email address" />
            <label className='input-label' htmlFor="password">Password</label>
            <input className='input' type="password" name="password" value='' placeholder="Enter password" />
            <button className='botton-Login' onClick={Profile}  type='button'>Login</button>
        </div>
    </div>
    </div>
    </>)
}

export default Login;