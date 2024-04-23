import {Link} from "react-router-dom";

import "./Home.css"

export default function Home() {
    return (
        <div className="home-container">
            <Link to={'/'} className="nav-item">Home</Link>
            <Link to={'/react-essentials'} className="nav-item">React Essentials</Link>
            <Link to={'/tic-tac-toe'} className="nav-item">Tic Tac Toe</Link>
            <Link to={'/timer'} className="nav-item">Timer</Link>
        </div>
    )
}
