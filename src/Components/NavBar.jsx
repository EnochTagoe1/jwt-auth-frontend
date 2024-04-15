import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import NavBar.css from "./Component/Navbar.css"


const URL = import.meta.env.VITE_BASE_URL;

const NavBar = ({ toggleLogin, handleLogout }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!toggleLogin) setUser(null);

    if (toggleLogin) {
      const token = localStorage.getItem("token");
      if (token) {
        fetch(`${URL}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(data.user);
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [toggleLogin]);

  return (
    <div className="navbar-container">
      <h1>Wits & Wheels</h1>
      <h3>
        <Link style={{ textDecoration: "none" }} to="/">
          "Where there is a wheel, there is a way"🚗 (click!)
        </Link>
      </h3>

      {!toggleLogin ? (
        <Link to={"/login"}>
          
          <button type="submit" class="btn btn-primary btn-rounded">Login</button>

         
        </Link>
      ) : (
        <div>
          {user && <span>Hello, {user.username.toUpperCase()}? | </span>}
          <Link onClick={handleLogout}>
            <span>Logout</span>
          </Link>
        </div>
      )}
      <hr />
    </div>
  );
};

export default NavBar;
