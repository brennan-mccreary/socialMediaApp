import React from "react";
import {
    useNavigate,
    Link
} from "react-router-dom"


const Login = (props) => {
    let navigate = useNavigate();
    const loggingIn = (event) => {
        // console.log(event);
        // event.preventDefault()
        props.handleSubmit(event);
        navigate('/home')
        
    }

    return (

        <div>
            <h2>Welcome Back, Friend!</h2>
            <form className="login" onSubmit={loggingIn}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email: </span>
                    <input name='email' value={props.info.email} onChange={props.handleChange} type="text" className="form-control" aria-label="Email" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Password: </span>
                    <input name='password' value={props.info.password} onChange={props.handleChange} type="password" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"  >Login</button>
                </div>
            </form>
            <div>
                    <h3>Don't Have an Account?</h3>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </div>

        </div>
        
    );
}

export default Login;
