import React from "react";
import FriendsList from "../../components/FriendsList/FriendsList";
import CreateAboutMe from "../../components/CreateAboutMe/CreateAboutMe";
import UploadImage from "../../components/UploadImage/UploadImage";
import {
    Route,
    Routes,
} from "react-router-dom"


const About = (props) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<CreateAboutMe />} />
            </Routes>
            <Routes>
                <Route path="/" element={<UploadImage 
                file={props.file} setFile={props.setFile} id={props.id} handleSubmit={props.handleSubmit} 
                />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<FriendsList friends={props.friends} />} />
            </Routes>
        </div>
    )
}
export default About;
