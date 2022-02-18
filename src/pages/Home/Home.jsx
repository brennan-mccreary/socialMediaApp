import React from "react";
import PostFeed from "../../components/PostFeed/PostFeed";
import FriendsList from "../../components/FriendsList/FriendsList";
import {
    Route,
    Routes,
} from "react-router-dom"


const Home = (props) => {
    return(
        <div >
            <head>
            <link rel="stylesheet" type ="text/css" href="./Home.css" />

            </head>

            <Routes>
            <Route exact path="/" element={<FriendsList friends={props.friends} />} />
            </Routes>
            <Routes>
            <Route exact path="/" element={<PostFeed />} />
            </Routes>

        </div>
    )
}


export default Home;
