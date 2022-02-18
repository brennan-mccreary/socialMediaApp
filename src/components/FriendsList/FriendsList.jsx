import React from "react";


const FriendsList = (props) => {
    return (
        <div>
            <div>
                <h2>These are my Friends</h2>
            </div>
            <div>
                    {(props.friends.length > 0) ? props.friends.map((el) => 
                    <div>
                        {el.firstName} {el.lastName}
                    </div>) 
                    : <div>incoming friends list</div>}

            </div>

        </div>
    )
}

export default FriendsList;
