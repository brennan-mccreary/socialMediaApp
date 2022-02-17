import React from 'react';
// import './Posts.css';

const CreatePosts = (props) => {
    return (
        <div className='top-level' id= 'Post' hidden={false}>
            Add a Post
            <form className='post-box' onSubmit={props.submitPost}>
                <input type="text"  value={props.postText} onChange={props.changePost}/>
                <div className='button'>
                    <button>Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePosts;
