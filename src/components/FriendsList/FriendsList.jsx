import React from "react";


const FriendsList = (props) => {

    return (
        <div>
            <div>
                <h2>These are my Friends</h2>
            </div>
            <div>
                <h3>
                    {(props.friends.length > 0) ? props.friends.map((friend,i)=> <tr key={i}> <td>{friend.firstName}</td>   </tr>    ):null} 

                </h3>
            </div>

        </div>
    )
    
}

export default FriendsList;
