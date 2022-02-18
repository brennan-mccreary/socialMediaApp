import React from "react";


const FriendsList = (props) => {
    return (
        <div>
            <div>
                <h2>My Friends</h2>
            </div>
            <div>
                    {(props.friends.length > 0) ? props.friends.map((el) => 
                    <div>
                        {el.firstName} {el.lastName}
                    </div>) 
                    : <div>No friends to show :(</div>}

            </div>

        </div>
    )
}

export default FriendsList;
