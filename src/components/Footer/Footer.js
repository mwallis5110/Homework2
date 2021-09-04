import React from "react";
// import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <container>
      <footer className="contact">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>
              <a href="https://www.linkedin.com/in/masonwallis/">LinkedIn</a>
            </h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>
              <a href="https://github.com/mwallis5110">Github</a>
            </h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>
              <a href="assets/images/Mason_Wallis_Resume.pdf" download>My Resumé</a>
            </h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4><a href="mailto: mwallis5110@gmail.com">Email Me</a></h4>
          </div>
        </div>
      </footer>
    </container>
  );
}