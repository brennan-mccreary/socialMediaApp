import React from "react";


const PostFeed = (props) => {

    return (
        
        <div>
            <div>
                <h2>What's Going on Today?</h2>
            </div>
            <div>
                {/* <h3>
                    {(props.posts.length > 0) ? props.posts.map((post,i)=> <tr key={i}> <td>{post.text}</td><td>{post.ownedBy}</td>   </tr>    ):null} 

                </h3> */}
            </div>
        </div>
    )
}

export default PostFeed;
