import NavBarLinks from "./NavBarLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = (props) =>
{
    return (
        <nav className="navbar container-fluid fixed-top shadow ">
        <div className="container pin-top d-flex justify-content-evenly-sm ">
          <a className="navbar-brand "  href="/" >        
           <span>Natan's Portfolio</span>
          </a>
          <NavBarLinks /> 
        </div>

      </nav>

    );
}

export default Navbar;