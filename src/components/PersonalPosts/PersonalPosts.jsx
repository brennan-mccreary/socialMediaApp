import React from 'react';

const MyPosts = (props) => {
    return (
        <div>
            {!props.myPosts ?
                <div>
                    No posts to display...
                </div>
                :
                <div>
                    {props.myPosts.map((el, i) =>
                        <div className='card post-container' key={i}>
                            <div className="col">
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title">My Post</h3>
                                        <p className="card-text">{el.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default MyPosts;
