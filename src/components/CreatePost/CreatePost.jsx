import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'

const CreatePosts = (props) => {
    let navigate = useNavigate()
    const viewMyPosts = (event) => {
        event.preventDefault()
        props.handleSubmit(event);
        navigate("/about")

    }

    return (
        <div className="top-level container col-xs-12" hidden={false}>
            What's on Your Mind Today?
            <form className="post-box" onSubmit={viewMyPosts} >
                <textarea className='text-input' type="text" value={props.newPost} onChange={props.handleChange} />
                <div className="button">
                    <button type="submit" className='post-btn btn btn-success' >Creat Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePosts;
