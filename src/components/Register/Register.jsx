import React from "react";
import {
    useNavigate,
} from "react-router-dom"

const Register = (props) => {
    let navigate = useNavigate();
    const firstTime = (event) => {
        // console.log(event);
        // event.preventDefault()
        props.handleSubmit(event);
        navigate('/home')
        
    }

    return (
        <div>
            <h2>Enter Your Information to Create an Account</h2>
            <form className="register-user" onSubmit={firstTime}>
                <div className="input-group mb-3" >
                    <span className="input-group-text" id="basic-addon3">First Name: </span>
                    <input name='firstName' value={props.info.firstName} onChange={props.handleChange} type="text" className="form-control" aria-label="First Name" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon4">Last Name: </span>
                    <input name='lastName' value={props.info.lastName} onChange={props.handleChange} type="text" className="form-control" aria-label="Last Name" aria-describedby="basic-addon2" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon5">Email: </span>
                    <input name='email' value={props.info.email} onChange={props.handleChange} type="text" className="form-control" aria-label="New Email" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon6">Password: </span>
                    <input name='password' value={props.info.password} onChange={props.handleChange} type="password" className="form-control" aria-label="New Password" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
