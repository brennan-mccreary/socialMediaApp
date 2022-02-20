import React from "react";
import './About.css';
import CreateAboutMe from "../../components/CreateAboutMe/CreateAboutMe";
import UploadImage from "../../components/UploadImage/UploadImage";
import FriendsList from "../../components/FriendsList/FriendsList";
import IncomingFriendRequests from "../../components/IncomingFriends/IncomingFriends";
import FindFriends from "../../components/FindFriends/FindFriends";
import placeholder from "../../Photos/placeholder.png";
import MyPosts from "../../components/PersonalPosts/PersonalPosts";
import {
    Route,
    Routes,
    Link
} from "react-router-dom"

const About = (props) => {
    const image = `http://localhost:5003/${props.user.image}`;
    return (
        <div className="about-container">
            {/* -Profile info container- */}
            <div className="container">
                <div className="row">
                    {/* profile picture, display bio*/}
                    <div className="col-md-5 col-lg-3 profile-info-container">
                        <h3>{props.user.firstName + ' ' + props.user.lastName}</h3>
                        {props.user.image ?
                            <img src={(image)} alt='profile' height={300} width={300} ></img>
                            :
                            <img src={placeholder} alt='placeholder profile' height={300} width={300}></img>}
                        
                        <Routes>
                            <Route path="/*" element={<UploadImage
                                file={props.file}
                                setFile={props.setFile}
                                id={props.id}
                                handleSubmit={props.handleSubmit} />}
                            />
                        </Routes>
                        <h2 className="personal-posts-head">Biography</h2>
                        {props.user.biography ?
                            <p className='bio-text'>{props.user.biography}</p>
                            :
                            null}



                        <div className="bio-container">
                            <Routes>
                                <Route exact path="/*" element={<CreateAboutMe submitAboutMe={props.submitAboutMe} handleChange={props.handleAnyChange}/>} />
                            </Routes>
                        </div>
                    </div>
                    {/* posts */}
                    <div className="col-md-5 col-lg-6">
                        <h2 className="personal-posts-head">My Posts</h2>
                        <Routes>
                            <Route exact path="/*" element={<MyPosts myPosts={props.myPosts} />} />
                        </Routes>
                    </div>
                    {/* friends */}
                    <div className="col-md-2 col-lg-3">
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
                        <div className="friends-info-container">
                            <Routes>
                                <Route exact path="/" element={<FriendsList friends={props.friends} />} />
                                <Route exact path="/incoming" element={<IncomingFriendRequests incoming={props.incoming} clickAccept={props.handleClickAcceptFriend} clickDecline={props.handleClickDeclineFriend}/>} />
                                <Route exact path="/find" element={<FindFriends handleChange={props.handleSearchChange} allUsers={props.allUsers} search={props.search} handleClick={props.handleClickAddFriend}/>} />
                            </Routes>
                        </div>

                    </div>
                </div>
            </div>
            {/* End-Profile info container- */}



        </div>
    )
}

export default About;
