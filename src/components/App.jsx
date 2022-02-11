//Imports
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

//Import components


class App extends Component {
    constructor() {
        super();
        this.state = {
            registerInfo: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    }

    handleRegisterChange = (event) => {
        this.setState(prevState => ({
            registerInfo: {
                ...prevState.registerInfo,
                [event.target.name]: event.target.value
            }
        })
        )
    }

    handleRegisterSubmit = (event) => {
        event.preventDefault();

        this.postRegister(this.state.registerInfo)
    }

    //HTTP Requests
    postRegister = async (info) => {
        await axios
            .post('http://localhost:5003/api/users/register', info)
            .then((res) => {

            });
    }

    //Run on component initial mount
    componentDidMount() {

    };

    //Render components
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/about">About Me</Link>
                            </li>
                            <li>
                                <Link to="/create">Create Post</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/create" element={<Create />} />
                        <Route exact path="/register" element={<Register handleChange={this.handleRegisterChange} info={this.state.registerInfo} handleSubmit={this.handleRegisterSubmit} />} />
                        <Route exact path="/" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>

        )
    }
}


function About() {
    return <h2>About to get Funky</h2>;
}

function Create() {
    return <h2>Nooice</h2>;
}

//Export
export default App;
