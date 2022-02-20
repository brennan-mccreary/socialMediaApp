 import React from 'react';

const IncomingFriendRequests = (props) => {
    return (
        <div>
            <div>
                <h2>Incoming Friend Requests</h2>
            </div>
            <div>
                {(props.incoming.length > 0) ? props.incoming.map((el) =>
                    <div key={el}>
                        {el.firstName} {el.lastName}
                    </div>)
                    : <div>Search for Friends</div>}
            </div>
        </div>
    );
}

export default IncomingFriendRequests;
