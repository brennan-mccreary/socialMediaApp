import React from "react";
import './PostFeed.css';

const PostFeed = (props) => {

    return (
        <div>
            {props.posts.length === 0 ? 
                <div>
                    No posts to display...
                </div>
                :
                <div>
                    {props.posts.map((el, i) => 
                        <div className='card post-container' key={i}>
                            <div className="col">
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title">{el.ownedBy.firstName + ' ' + el.ownedBy.lastName + ' '} says...</h3>
                                        <p className="card-text">{el.text}</p>
                                        <h6>Posted at: {el.postedOn}</h6>
                                    </div>
                                    <div>
                                        <button className='btn btn-success' onClick={props.handleClick} id={el._id}>Like</button>
                                        <h6>Likes: {el.likeCount}</h6>
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

export default PostFeed;
