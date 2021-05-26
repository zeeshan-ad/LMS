import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
             <Navbar />
        </Router>
    )
}

export default App
