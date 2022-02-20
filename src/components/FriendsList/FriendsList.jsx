import React from "react";
import './FriendsList.css';


const FriendsList = (props) => {
    return (
        <div>
            <div className="friends-list-head">
                <h3>My Friends</h3>
            </div>
            <div>
                    {(props.friends.length > 0) ? props.friends.map((el, i) => 
                    <div className='friend-display' key={i}>
                        {el.firstName} {el.lastName}
                    </div>) 
                    : <div>No friends to show :(</div>}

            </div>

        </div>
    )
}

export default FriendsList;
