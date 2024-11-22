
import { Link } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
    return(
        <>
            <nav className="navbar">
                <Link id="topLink" to="/"><h1>Union Map</h1></Link>
                
               <div>
                    {/* <Link to="/">Home</Link>
                    <span> </span> */}
                    <Link to="/chat">Chat</Link>
                    <span> </span>
                    <Link to="/signup">Sign Up</Link>
                    <span> </span>
                    <Link to="/login">Log In</Link>
               </div>
            </nav>
            
        </>
    )
}

export default Navbar