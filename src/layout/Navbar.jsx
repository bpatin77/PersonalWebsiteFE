import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/account/authSlice.js";
import "./Navbar.css";

/** Main site navigation */
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const attemptLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header>
      <nav className="nav">
       
        <NavLink to="/" className="Navbar1">
          Home
        </NavLink>

        <NavLink to="/About" className="Navbar2">
          About
        </NavLink>

        <NavLink to="/Portfolio" className="Navbar3">
          Portfolio
        </NavLink>

        <NavLink to="/Contact" className="Navbar4">
          Contact
        </NavLink>

        <NavLink to="/login" className="Navbar5">
          Login/Register
        </NavLink>

        {token && (
          <a href="#" onClick={attemptLogout} className="Navbar6">
            Log Out
          </a>
        )}
      </nav>
    </header>
  );
}
export default Navbar;
