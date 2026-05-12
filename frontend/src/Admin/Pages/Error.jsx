

import React from "react";


const Error404 = () => {
  return (
    <div className="error-page">

      <div className="error-card">

        <h1 className="error-code">
          4<span>0</span>4
        </h1>

        <h2 className="title">
          Page Not Found
        </h2>

        <p className="desc">
          Oops! The page you are looking for does not exist.
          It might have been moved or deleted.
        </p>

        <div className="btn-group">

          <button className="home-btn">
            Back To Home
          </button>

          <button className="contact-btn">
            Contact Support
          </button>

        </div>

      </div>

    </div>
  );
};

export default Error404;