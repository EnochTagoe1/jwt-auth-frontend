import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/LandingPage.css";

function LandingPage() {

  return (
    <div style={{ textAlign: "center", marginTop: 10 }}>
      
      <h1>Welcome!</h1>
      <h4>Go to your dashboard</h4>
<Link to="/dashboard">Dashboard</Link>
      <div  style={{
      backgroundImage: `url('https://www.audiusa.com/content/dam/nemo/us/models/R8/R8-Heritage/1920x1080_R8080055_large.jpg?imwidth=1920&imdensity=1')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '80vh',
      overflow: 'hidden'
    }}>

      </div>
      <h3>
        {/* Dashboard is a protected component. If you are not logged in and you try
        to navigate to the component you will be sent to the Login Page. Try It! */}
      </h3>
    </div>
  );
}

export default LandingPage;
