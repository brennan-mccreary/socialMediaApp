import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePosts = (props) => {
    let navigate = useNavigate()
    const viewMyPosts = (event) => {
        event.preventDefault()
        props.handleSubmit(event);
        navigate("/about")
    }

    return (
        <div className="top-level"  hidden={false}>
            What's on Your Mind Today?
            <form className="post-box" onSubmit={viewMyPosts} >
                <input type="text"  value={props.newPost} onChange={props.handleChange}/>
                <div className="button">
                    <button type="submit" >Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePosts;
