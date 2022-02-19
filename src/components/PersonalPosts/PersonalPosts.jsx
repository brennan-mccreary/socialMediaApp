import React from 'react';
import './PersonalPosts.css';

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
                                        <p className="card-text">{el.text}</p>
                                        <h6>Posted at: {el.postedOn}</h6>
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
