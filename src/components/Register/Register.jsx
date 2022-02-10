import React from "react";

const Register = () => {
    return (  
        <div>
        <h2>Register My Ameezement</h2>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">First Name: </span>
                <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" />
            </div>
        
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon4">Last Name: </span>
                <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon2" />
            </div>  

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon5">Email: </span>
                <input type="text" class="form-control" placeholder="New Email" aria-label="New Email" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon6">Password: </span>
                <input type="text" class="form-control" placeholder="New Password" aria-label="New Password" aria-describedby="basic-addon1" />
            </div>

    </div>                  

    );
}
 
export default Register;
