import React from 'react';

const FindFriends = (props) => {
    return (
        <div>
            <div>
                <h2>Find Friends</h2>
            </div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input onChange={props.handleChange} value={props.search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>

                </div>
            </nav>
            <ul>
                {props.allUsers.length > 0 ?
                    <>
                        {props.allUsers.filter((el) =>
                            el.firstName.toLowerCase().includes(props.search.toLowerCase()) || el.lastName.toLowerCase().includes(props.search.toLowerCase())).map((el, i) =>
                                <li key={i}>
                                    {el.firstName} {el.lastName}
                                </li>
                            )}
                    </>
                    : null}
            </ul>
        </div>
    );
}

export default FindFriends;