import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Connect from './components/Connect/Connect';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Connect />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
    </Router>
);

export default App;