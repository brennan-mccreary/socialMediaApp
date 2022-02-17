import React from 'react';
// import './AboutMe.css';

const CreateAboutMe = (props) => {
    return (
        <div className='top-level' id= 'Post' hidden={false}>
            Add an AboutMe
            <form className='AboutMe-box' onSubmit={props.submitAboutMe}>
                <input type="text"  value={props.aboutMeText} onChange={props.changeAboutMe}/>
                <div className='button'>
                    <button>Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAboutMe;
