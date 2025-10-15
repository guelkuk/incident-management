import './Home.scss'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <div className = "container home-page">
                <div className="text-zone">
                    <h1>Incitra</h1>
                    <h4>Intelligent Incident Management System</h4>
                    <Link to="/newincident" className="flat-button">GET STARTED</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Home