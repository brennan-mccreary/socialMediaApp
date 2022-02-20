import React from "react";
import './Home.css';
import PostFeed from "../../components/PostFeed/PostFeed";
import FriendsList from "../../components/FriendsList/FriendsList";
import placeholder from "../../Photos/placeholder.png";
import {
    Route,
    Routes,
} from "react-router-dom"


const Home = (props) => {
    const image = `http://localhost:5003/${props.user.image}`;

    return(
        <div>

            {/* <Routes>
                <Route exact path="/" element={<FriendsList friends={props.friends} />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<PostFeed posts={props.posts} handleClick={props.handleClick}/>} />
            </Routes> */}



            <div className="container head-container">
                <div className="row">
                    <div className="col-xs-4 col-lg-3  profile-info-container">
                        <h3>{props.user.firstName + ' ' + props.user.lastName}</h3>
                            {props.user.image ?
                                <img src={(image)} alt='profile' height={300} width={300} ></img>
                                :
                                <img src={placeholder} alt='placeholder profile' height={300} width={300}></img>}

                            {props.user.biography ?
                                <p className='bio-text'>{props.user.biography}</p>
                                :
                                null}
                    </div>
                    <div className="col-xs-8 col-md-6 ">
                        <h2 className="personal-posts-head">Friends' Posts</h2>
                        <Routes>
                            <Route exact path="/" element={<PostFeed posts={props.posts} handleClick={props.handleClick}/>} />
                        </Routes>
                    </div>
                    <div className="col-xs-4 col-md-3  friends-info-container">
                        <Routes>
                            <Route exact path="/" element={<FriendsList friends={props.friends} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
