//Imports
import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import {
    BrowserRouter, 
    Routes, 
    Route, 
    Link
} from "react-router-dom"

import Login from "./Login/Login.jsx"


//Import components


class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    //Run on component initial mount
    componentDidMount() {

    };

    //Render components
    render() {
        return(
            <BrowserRouter>
                {/* <div>
                    Hello
                </div> */}
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
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