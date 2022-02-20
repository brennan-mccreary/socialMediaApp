import React from 'react';
import './FindFriends.css';

const FindFriends = (props) => {
    return (
        <div>
            <div className="find-friends-head">
                <h2 >Find Friends:</h2>
            </div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input onChange={props.handleChange} value={props.search} className="form-control me-2 add-friend-search" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <div>
                {props.allUsers.length > 0 ?
                    <>
                        {props.allUsers.filter((el) =>
                            el.firstName.toLowerCase().includes(props.search.toLowerCase()) || el.lastName.toLowerCase().includes(props.search.toLowerCase())).map((el, i) =>
                                <div className="container" key={i}>
                                    <div className="row">
                                        <div className="col-lg-9 add-friend-list" >
                                            {el.firstName} {el.lastName}
                                        </div>
                                        <div className="col-lg-3" >
                                            <button onClick={props.handleClick} id={el._id} className='btn btn-success add-friend-button'>Add</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        
                    </>
                    : null}
            </div>
        </div>
    );
}

export default FindFriends;