 import React from 'react';
 import './IncomingFriends.css';

const IncomingFriendRequests = (props) => {
    return (
        <div>
            <div className="friend-request">
                <h2>Friend Requests:</h2>
            </div>
            <div>
                {(props.incoming.length > 0) ? props.incoming.map((el, i) =>
                    <div className="container" key={i}>
                        <div className="row">
                            <div className="col-xs-12 friend-request-list" >
                                {el.firstName} {el.lastName}
                            </div>
                            <div className="col-lg-6" >
                                <button onClick={props.clickAccept} id={el._id}  className='btn btn-success '>Accept</button>
                            </div>
                            <div className="col-lg-6">
                                <button onClick={props.clickDecline} id={el._id}  className='btn btn-danger'>Decline</button>
                            </div>
                        </div>
                    </div>)
                    : <div className='friend-request-list'>No new requests...</div>}
            </div>
        </div>
    );
}

export default IncomingFriendRequests;
