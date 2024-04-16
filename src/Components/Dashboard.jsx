import { useOutletContext } from "react-router-dom";
import Cars from './Cars'
import { useNavigate } from "react-router-dom";
const Dashboard = ({ handleLogout }) => {
  const navigate = useNavigate();
  const { user } = useOutletContext(); // Access user data provided by the Outlet's context

  return (
    <div>
      <br />
      <br />
      <h2>Dashboard</h2>

      {user && (
        <h1>
          Welcome, {user.username[0].toUpperCase()}
          {user.username.slice(1).toLowerCase()}
        </h1>
      )}

      {/* Use user data as needed, for example: */}

      <button onClick={handleLogout} class="btn btn-danger">Logout</button>
      <br>
      </br>
      <br>
      </br>
        <button type="submit" class="btn btn-primary btn-rounded" onClick={() => {navigate("/newcar")}}>Add New Car</button>
      <Cars />
    </div>
  );
};

export default Dashboard;
