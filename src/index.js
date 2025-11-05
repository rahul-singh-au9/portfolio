import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App';
import Post1 from "./components/Posts/Post1"
import Post2 from "./components/Posts/Post2"
import Post3 from "./components/Posts/Post3"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/post1" element={<Post1 />} />
                <Route path="/post2" element={<Post2 />} />
                <Route path="/post3" element={<Post3 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
