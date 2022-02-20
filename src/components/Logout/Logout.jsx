import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'

const Logout = (props) => {
    let navigate = useNavigate()
    const loggingOut = (event) => {
        event.preventDefault()
        props.handleLogout();
        navigate("/")

    }
    return (
        <div className="body">
            <form className='logout' onClick={loggingOut}>
                <div className="lefty">
                    <button type="logout" className="btn btn-primary">Logout</button>
                </div>
            </form>
        </div>
    )
}

export default Logout;