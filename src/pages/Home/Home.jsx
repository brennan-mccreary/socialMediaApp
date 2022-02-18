import React from "react";
import PostFeed from "../../components/PostFeed/PostFeed";
import FriendsList from "../../components/FriendsList/FriendsList";
import {
    Route,
    Routes,
} from "react-router-dom"


const Home = (props) => {
    return(
        <div>

            <Routes>
                <Route exact path="/" element={<FriendsList friends={props.friends} />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<PostFeed posts={props.posts} handleClick={props.handleClick}/>} />
            </Routes>

        </div>
    )
}


export default Home;
