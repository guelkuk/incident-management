import React, { useState } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faGear, faUser, faBars, faHouse } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className={`nav ${showNav ? 'mobile-show' : ''}`}>
            <div className="top-section">
                <h2>LOGO</h2>
                <FontAwesomeIcon icon = {faBars} size = "2x" className="bars-icon" onClick={() => setShowNav(!showNav)} />
            </div>
            <nav>
                <NavLink end className="home-link" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHouse} size = "2x" />
                </NavLink>
                <NavLink end className="newIncident-link" to="/newincident" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faPlus} size = "2x" />
                </NavLink>
                <NavLink end className="myIncidents-link" to="/myincident" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} size = "2x" />
                </NavLink>
                <NavLink end className="settings-link" to="/settings" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faGear} size = "2x" />
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;