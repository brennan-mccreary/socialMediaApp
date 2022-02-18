import React from "react";


const FriendsList = (props) => {
    return (
        <div>
            <div>
                <h2>These are my Friends</h2>
            </div>
            <div>
                <ul>
                    {(props.friends.length > 0) ? props.friends.map((friend, i) => friend.firstName) : <div>incoming friends list</div>}
                </ul>

            </div>

        </div>
    )
}

export default FriendsList;
