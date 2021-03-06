import React from 'react';
import './CreateAboutMe.css';

const CreateAboutMe = (props) => {
    return (
        <div className='about-me-container' hidden={false}>
            <h3>Add Bio:</h3> 
            <form className='' onSubmit={props.submitAboutMe}>
                <textarea className='text-input-bio' type="text" name='biography' value={props.aboutMeText} onChange={props.handleChange}/>
                <div className="save-button">
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAboutMe;
