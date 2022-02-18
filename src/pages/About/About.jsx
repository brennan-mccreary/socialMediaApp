import React from "react";
import CreateAboutMe from "../../components/CreateAboutMe/CreateAboutMe";
import UploadImage from "../../components/UploadImage/UploadImage";
import FriendsList from "../../components/FriendsList/FriendsList";
import IncomingFriendRequests from "../../components/IncomingFriends/IncomingFriends";
import FindFriends from "../../components/FindFriends/FindFriends";
import placeholder from "../../Photos/placeholder.png"
import {
    Route,
    Routes,
    Link
} from "react-router-dom"

const About = (props) => {
    const image = `http://localhost:5003/${props.user.image}`;
    return(
        <div>
            {props.user.image ? 
            <img src={(image)} alt='profile' height={300} width={300} ></img>
            :
            <img src={placeholder} alt='placeholder profile' height={300} width={300}></img>}
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
                        <Link to="/about/">Friends</Link>
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
                <Route exact path="/" element={<FriendsList friends={props.friends} />} />
                <Route exact path="/incoming" element={<IncomingFriendRequests />} />
                <Route exact path="/find" element={<FindFriends handleChange={props.handleChange} allUsers={props.allUsers} search={props.search}/>} />
            </Routes>
                
            
        </div>
    )
}

export default About;
