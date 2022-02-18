import React from "react";
import CreateAboutMe from "../../components/CreateAboutMe/CreateAboutMe";
import UploadImage from "../../components/UploadImage/UploadImage";
import FriendsList from "../../components/FriendsList/FriendsList";
import IncomingFriendRequests from "../../components/IncomingFriends/IncomingFriends";
import FindFriends from "../../components/FindFriends/FindFriends";
import {
    Route,
    Routes,
    Link
} from "react-router-dom"


const About = (props) => {
    return(
        <div>
            <Routes>
                <Route exact path="/*" element={<CreateAboutMe />} />
            </Routes>
            <Routes>
                <Route path="/*" element={<UploadImage 
                    file={props.file} 
                    setFile={props.setFile} 
                    id={props.id} 
                    handleSubmit={props.handleSubmit} />} 
                />
            </Routes>
            <nav>
                <ul>
                    <li>
                        <Link to="/about/friends">Friends</Link>
                    </li>
                    <li>
                        <Link to="/about/incoming">Requests</Link>
                    </li>
                    <li>
                        <Link to="/about/find">Find Friends</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/friends" element={<FriendsList friends={props.friends} />} />
                <Route exact path="/incoming" element={<IncomingFriendRequests />} />
                <Route exact path="/find" element={<FindFriends handleChange={props.handleChange} allUsers={props.allUsers} search={props.search}/>} />
            </Routes>
                
            
        </div>
    )
}

export default About;
