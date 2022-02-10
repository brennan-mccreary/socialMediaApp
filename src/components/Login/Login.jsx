import React from "react";

const Login = () => {
    return (  
        <div>
        <h2>Logging</h2>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Email: </span>
                <input type="text" class="form-control" placeholder="User Email" aria-label="User Email" aria-describedby="basic-addon1" />
            </div>
        
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2">Password: </span>
                <input type="text" class="form-control" placeholder="User Password" aria-label="User Password" aria-describedby="basic-addon2" />
            </div>  
    </div>                  

    );
}
 
export default Login;
