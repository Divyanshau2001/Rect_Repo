import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
  return (
   <div className="login">
    <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum officiis commodi cumque alias. Sapiente, maxime?</p>
            <span>Do you not have an account</span>
            <Link to="/register">
           <button>Register</button>
           </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                
                <Link to="/login">
                <button>Login</button>
                </Link>
            </form>
        </div>
    </div>
   </div>
  )
}

export default Login;