import React from "react";

const AboutUsPage = () => {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U05GZNB4HV0-c30de9e59900-72"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <h2>Enoch Tagoe</h2>
          < a href="">Email: enochtagoe@pursuit.org</a>
          <br>
          </br>
          <p>
            GitHub:{" https://github.com/EnochTagoe1"}
            <a href="" target="_blank" rel="noopener noreferrer">
            
            </a>
          </p>
          <p>
          <Link to="/">
              <button className="btn btn-rect-to-round btn-rect-to-round--red"> Back to Home </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
