//Imports
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx"
import jwtDecode from 'jwt-decode';
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
            loginInfo: {
                email: '',
                password: ''
            },
            registerInfo: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            currentUser: {

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

    handleLoginChange = (event) => {
        this.setState(prevState => ({
            loginInfo: {
                ...prevState.loginInfo,
                [event.target.name]: event.target.value
            }
        })
        )
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.postLogin(this.state.loginInfo)
    }

    //HTTP Requests
    postRegister = async (info) => {
        await axios
            .post('http://localhost:5003/api/users/register', info)
            .then((res) => {
                console.log(res.headers["x-auth-token"])
                localStorage.setItem("token", res.headers["x-auth-token"]);
                const user = jwtDecode(localStorage.getItem("token"));
                this.setState({
                    currentUser: user
                })
                console.log(user)
            });
    }

    postLogin = async (info) => {
        await axios
            .post('http://localhost:5003/api/auth/', info)

            .then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data);
                const user = jwtDecode(localStorage.getItem("token"));
                this.setState({
                    currentUser: user
                })
                console.log(user);
            })
    }

    logOut = async () => {
        localStorage.clear()
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
                        {/* <Route exact path="/login" element={<Login handleChange={this.handleRegisterChange} info={this.state.loginInfo} handleSubmit={this.handleLoginSubmit} />} /> */}
                        <Route exact path="/register" element={<Register handleChange={this.handleRegisterChange} info={this.state.registerInfo} handleSubmit={this.handleRegisterSubmit} />} />
                        <Route exact path="/" element={<Login handleChange={this.handleLoginChange} info={this.state.loginInfo} handleSubmit={this.handleLoginSubmit} />} />
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
