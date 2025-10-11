import './Home.scss'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <div className = "container home-page">
                <div className="text-zone">
                    <h1>Incident-Management</h1>
                    <h2>Your home for everything Premier League related!</h2>
                    <Link to="/settings" className="flat-button">GET STARTED</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Home