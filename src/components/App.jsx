//Imports
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from "./Login/Login.jsx"
import Logout from "./Logout/Logout"
import Register from "./Register/Register.jsx"
import Home from './Home/Home';
import About from './About Me/About';
import FindFriends from './Register/FindFriends/FindFriends';
import UploadImage from './UploadImage/UploadImage';
import jwtDecode from 'jwt-decode';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,

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
                _id: "620b08c552877c05ecd3e8e4"
            },
            file: '',

            allUsers: [],

            search: ""
        }
    }

    setFile = (file) => {
        this.setState({
            file: file
        });
    }

    handleUploadImageSubmit = (event) => {
        event.preventDefault();
        this.putImage(this.state.currentUser._id);
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

    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    //HTTP Requests
    putImage = async (id) => {
        var form = new FormData();
        form.append('image', this.state.file);

        await axios
            .put(`http://localhost:5003/api/users/image/${id}`, form)
            .then((res) => {
                const user = res.data;
                console.log(user);
            });
    };

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

    handleLogout = async () => {
        localStorage.clear();
        this.setState({
            currentUser: {}
        })
    }

    findAllUsers = async () => {
        await axios
            .get('http://localhost:5003/api/users')
            .then((res) => {
                this.setState({
                    allUsers: res.data
                })
            });
    }

    //Run on component initial mount
    componentDidMount() {
        this.findAllUsers()

    };

    //Render components
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Login</Link>
                            </li>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                {/* {(this.email.length > 0 ) ? <Link to="/about">About Me</Link> : null} */}
                                <Link to="/about">About Me</Link>
                            </li>
                            <li>
                                <Link to="/create">Create Post</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                            {/* test links */}
                            <li>
                                <Link to="/upload">Upload Image</Link>
                            </li>
                            <li>
                                <Link to="/findfriends">Find Friends</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/create" element={<Create />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/register" element={<Register handleChange={this.handleRegisterChange} info={this.state.registerInfo} handleSubmit={this.handleRegisterSubmit} />} />
                        <Route exact path="/" element={<Login handleChange={this.handleLoginChange} info={this.state.loginInfo} handleSubmit={this.handleLoginSubmit} />} />
                        <Route exact path="/logout" element={<Logout handleLogout={this.handleLogout} />} />
                        <Route path="/upload" element={<UploadImage file={this.state.file} setFile={this.setFile} id={this.state.currentUser._id} handleSubmit={this.handleUploadImageSubmit} />} />
                        <Route path="/findfriends" element={<FindFriends allUsers={this.state.allUsers} search={this.state.search} handleChange={this.handleSearchChange} />} />
                    </Routes>
                </div>

            </BrowserRouter>

        )
    }
}




function Create() {
    return <h2>Nooice</h2>;
}

//Export
export default App;
