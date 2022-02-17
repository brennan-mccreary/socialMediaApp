import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost"
import {
    Route,
    Routes,
} from "react-router-dom"


const NewPost = (props) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<CreatePost />} />
            </Routes>
        </div>
    )
}
export default CreatePost;
