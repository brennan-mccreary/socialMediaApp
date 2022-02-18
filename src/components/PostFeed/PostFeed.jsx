import React from "react";
import './PostFeed.css';

const PostFeed = (props) => {

    return (
        <div>
            {!props.posts ? 
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
                                    <h3 className="card-title">Friend's Post</h3>
                                    <p className="card-text">{el.text}</p>
                                    <h6>{el.ownedBy}</h6>
                                </div>
                                <span>
                                    <button onClick={props.handleClick} id={el._id}>Like</button>
                                    <a>Likes: {el.likeCount}</a>
                                </span>
                                
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
