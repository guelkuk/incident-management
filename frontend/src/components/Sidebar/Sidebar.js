import React, { useState } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faPlus, faGear, faUser, faBars, faHouse } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav">
            <div className="top-section">
                <h2>LOGO</h2>
                <FontAwesomeIcon icon = {faBars} size = "2x" className="bars-icon" onClick={() => setShowNav(!showNav)} />
            </div>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/home">
                    <FontAwesomeIcon icon={faHouse} size = "2x" onClick={() => setShowNav(false)} />
                    <a>Home</a>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="newIncident-link" to="/newIncident">
                    <FontAwesomeIcon icon={faPlus} size = "2x" onClick={() => setShowNav(false)} />
                    <a>New Incident</a>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="myIncidents-link" to="/myIncidents">
                    <FontAwesomeIcon icon={faUser} size = "2x" onClick={() => setShowNav(false)} />
                    <a>My Incidents</a>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="settings-link" to="/settings">
                    <FontAwesomeIcon icon={faGear} size = "2x" onClick={() => setShowNav(false)} />
                    <a>Settings</a>
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;