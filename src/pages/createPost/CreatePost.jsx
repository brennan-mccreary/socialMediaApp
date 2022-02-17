import React from "react";
import CreatePosts from "../../components/CreatePost/CreatePost"
import {
    Route,
    Routes,
} from "react-router-dom"


const CreatePage = (props) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<CreatePosts />} />
            </Routes>
        </div>
    )
}
export default CreatePage;
