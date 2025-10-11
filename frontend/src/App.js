import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import MyIncident from './components/MyIncident/MyIncident';
import NewIncident from './components/NewIncident/NewIncident';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/" element={<MyIncident />}></Route>
            <Route path="/" element={<NewIncident />}></Route>
        </Routes>
        </Router>
    );
}

export default App;
