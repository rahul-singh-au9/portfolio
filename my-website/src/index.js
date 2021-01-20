import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Post1 from "./components/Posts/Post1"
import Post2 from "./components/Posts/Post2"
import Post3 from "./components/Posts/Post3"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/post1" component={Post1}/>
            <Route exact path="/post2" component={Post2}/>
            <Route exact path="/post3" component={Post3}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
