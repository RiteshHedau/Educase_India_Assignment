import "./App.css";
import {useNavigate} from 'react-router-dom';


function App() {
  let navigate = useNavigate();

  function login() {
    navigate("/Login");
  }

  function Signup(){
    navigate("/Signup");
  }
  return (
    <>

    <div className="page">
      <div className="first-page">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. voluptate
          consectetur ipsa ipsam natus eveniet corporis dolores distinctio rerum
          quisquam maxime facilis sint eum!
        </p>
        <div className="input-btn">
          <button className="Credential SignUp" onClick={Signup} type="button">
            Create Account
          </button>
          <button className="Credential Login" type="button" onClick={login}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>


      
    </>
  );
}

export default App;
