//Imports
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from "./Login/Login.jsx"
import Logout from "./Logout/Logout"
import Register from "./Register/Register.jsx"
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import CreatePost from './CreatePost/CreatePost';
import jwtDecode from 'jwt-decode';
import ErrorPage from '../components/ErrorPage/ErrorPage'
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
            file: '',

            allUsers: [],
            biography: '',

            search: "",
            currentUser: undefined,
            friends: [],
            posts: [],
            newPost: '',
            myPosts: [],
            incoming: []
        }
    }

    setFile = (file) => {
        this.setState({
            file: file
        });
    };

    handleAnyChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


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

    populateData = (id) => {
        this.getFriendsPosts(id);
        this.currentFriends(id);
        this.getMyPosts(id);
        this.getIncomingRequests(id);
    };

    handleClickLike = (event) => {
        let id = event.target.id

        this.putLike(id);
    };

    handleSubmitAboutMe = (event) => {
        event.preventDefault();
        this.putAboutMe(this.state.currentUser._id, {biography: this.state.biography});
    };


    //HTTP Requests
    putAboutMe = async (id, biography) => {
        await axios
            .put(`http://localhost:5003/api/users/about/${id}`, biography)
            .then((res) => {
                this.setState({
                    currentUser: res.data
                })
                console.log(res.data)
            });
    };
    
    putLike = async (id) => {
        await axios
            .put(`http://localhost:5003/api/posts/like/${id}`)
            .then((res) => {
                let target = [...this.state.posts];
                let index = target.findIndex((el) => res.data._id === el._id);
                target[index] = res.data;
                this.setState({
                    posts: target
                });
            })
    };

    getMyPosts = async (id) => {
        await axios
            .get(`http://localhost:5003/api/posts/${id}`)
            .then((res) => {
                this.setState({
                    myPosts: res.data
                });
            })
    };

    getFriendsPosts = async (id) => {
        await axios
            .get(`http://localhost:5003/api/posts/friends/${id}`)
            .then((res) => {
                this.setState({
                    posts: res.data
                });
            })
    };

    getIncomingRequests = async (id) => {
        await axios
            .get(`http://localhost:5003/api/users/friend-requests/${id}`)
            .then((res) => {
                this.setState({
                    incoming: res.data
                })
            });
    }

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


                this.populateData(user._id);
            })
    }

    postMyPost = async () => {
        await axios
            .post('http://localhost:5003/api/posts/post', {
                text: this.state.newPost,
                ownedBy: this.state.currentUser._id
            })
            .then((res) => {
                this.setState(prevState => {
                    return { myPosts: [res.data, ...prevState.myPosts] }
                });

            })
    }

    handleNewPostChange = (event) => {
        this.setState({
            newPost: event.target.value
        })

    }

    handleNewPostSubmit = (event) => {
        event.preventDefault();
        this.postMyPost(this.state.newPost)
    }


    handleLogout = async () => {
        localStorage.clear();
        this.setState({
            currentUser: undefined,
            file: '',
            search: "",
            friends: [],
            posts: [],
            newPost: '',
            myPosts: [],
            incoming: [],
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

    handleFriendsSubmit = (event) => {
        event.preventDefault();
        this.currentFriends(this.state.currentUser._id);
    };

    currentFriends = async (id) => {
        await axios
            .get(`http://localhost:5003/api/users/${id}/friends`)
            .then((res) => {
                this.setState({
                    friends: res.data
                })
                // console.log(this.friends);
            });
    };

    Posts = async () => {

        await axios
            .get(`http://localhost:5003/api/post`)
            .then((res) => {
                this.profileFeed = res.data;
            });
    };

    //Run on component initial mount
    componentDidMount() {
        this.findAllUsers()
    };

    //Render components
    render() {
        return (
            <BrowserRouter>
                <div>
                    {this.state.currentUser !== undefined ?
                        <>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item link-spacer">
                                                <Link to="/home">Home</Link>
                                            </li>
                                            <li className="nav-item link-spacer">
                                                <Link to="/about">About Me</Link>
                                            </li>
                                            <li className="nav-item link-spacer">
                                                <Link to="/create">Create Post</Link>
                                            </li>
                                            <li className="nav-item link-spacer">
                                                <Link to="/logout">Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <Routes>
                                <Route exact path="/about/*"
                                    element={<About
                                        user={this.state.currentUser}
                                        file={this.state.file}
                                        friends={this.state.friends}
                                        setFile={this.setFile}
                                        id={this.state.currentUser._id}
                                        submitAboutMe={this.handleSubmitAboutMe}
                                        handleSubmit={this.handleUploadImageSubmit}
                                        handleSearchChange={this.handleSearchChange}
                                        allUsers={this.state.allUsers}
                                        myPosts={this.state.myPosts}
                                        incoming={this.state.incoming}
                                        handleAnyChange={this.handleAnyChange}
                                        search={this.state.search} />}
                                />
                                <Route exact path="/create/*" element={<CreatePost handleChange={this.handleNewPostChange} handleSubmit={this.handleNewPostSubmit} />} />
                                <Route exact path="/home/*"
                                    element={<Home
                                        user={this.state.currentUser}

                                        handleClick={this.handleClickLike}
                                        friends={this.state.friends}
                                        posts={this.state.posts}
                                    />} />
                                <Route exact path="/logout/*" element={<Logout handleLogout={this.handleLogout} />} />
                                <Route path='*' element={<ErrorPage />} />
                            </Routes>
                        </>
                        :
                        <>
                            <Routes>
                                <Route exact path="/" element={<Login handleChange={this.handleLoginChange} info={this.state.loginInfo} handleSubmit={this.handleLoginSubmit} />} />
                                <Route exact path="/register" element={<Register handleChange={this.handleRegisterChange} info={this.state.registerInfo} handleSubmit={this.handleRegisterSubmit} />} />
                                <Route exact path="*" element={<Login handleChange={this.handleLoginChange} info={this.state.loginInfo} handleSubmit={this.handleLoginSubmit} />} />                            </Routes>
                        </>}
                </div>
            </BrowserRouter>
        )
    }
}

//Export
export default App;
