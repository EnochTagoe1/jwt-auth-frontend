import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Cars from "./Components/Cars";
import CarNewForm from "./Components/CarNewForm";
import CarDetails from "./Components/CarDetails";
// import Footer from "./Components/Footer";
import CarEditForm from "./Components/CarEditForm";
import AboutUsPage from "./Components/AboutUs";

function App() {
  const navigate = useNavigate();
  const [toggleLogin, setToggleLogin] = useState(false);
  const carDetails = useNavigate();

  async function handleLogout() {
    localStorage.removeItem("token");

    await setToggleLogin(false);

    navigate("/login");
  }

  return (
    <div className="app">
      <NavBar
        handleLogout={handleLogout}
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
      />
      {/* <AboutUsPage /> */}
      {/* <Cars /> */}
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/aboutus"
          element={<AboutUsPage setToggleLogin={setToggleLogin} />}
        />

        <Route
          path="/login"
          element={<Login setToggleLogin={setToggleLogin} />}
        />
        <Route
          path="/register"
          element={<Register setToggleLogin={setToggleLogin} />}
        />

<Route
          path="/cars"
          element={<Cars setToggleLogin={setToggleLogin} />}
        />

        <Route element={<ProtectedRoute />}>
          {/* Place protected routes here */}
          <Route
            path="/dashboard"
            element={<Dashboard handleLogout={handleLogout} />}
          />
        

        <Route
            path="/newcar"
            element={<CarNewForm  />}
          />

        <Route
            path="/cardetails/:id"
            element={<CarDetails  />}
          />
      
        <Route
            path="/cars/:id/edit"
            element={<CarEditForm  />}
          />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
