import React from 'react';
// import './AboutMe.css';

const CreateAboutMe = (props) => {
    return (
        <div className='top-level' id= 'Post' hidden={false}>
            Add a Bio Here: 
            <form className='' onSubmit={props.submitAboutMe}>
                <input type="text"  value={props.aboutMeText} onChange={props.changeAboutMe}/>
                <div>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAboutMe;
