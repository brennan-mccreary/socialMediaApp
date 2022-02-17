import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
    let navigate = useNavigate()
    const loggingOut = (event) => {
        event.preventDefault()
        props.handleLogout();
        navigate("/")

    }
    return (
        <div>
            <form className='logout' onClick={loggingOut}>
                <div>
                    <button type="logout" className="btn btn-primary">Logout</button>
                </div>
            </form>
        </div>
    )
}

export default Logout;