import React from "react";
import "./index.css";

function AboutMe() {
  return (
    <div className="columns sec1">
      <div className="info-col   column">
        <h1 className="sh">
          {" "}
          <p>
            Im Abdullah Nasar from Mawanella.And im 20 years old undergraduate
            in university of colombo school of computing.
            <br />
            <br />I have completed my advanced levels in Zahira College
            Mawanella.
            <br />
            <br /> have completed my Di-Tec diploma in Esoft Metro Campus Kandy.
          </p>
        </h1>
        {/*<div class="circle"></div>*/}
        <h1 className="mail2">abdalla0513@gmail.com</h1>
      </div>
      <div className="column has-text-centered">
        <img className="img2" src="PROPIC2.jpg " />
      </div>
      <div className="column has-text-centered">
        <div className="circle-2">
          <i className="fa-solid fa-arrow-right fa-4x pt-6" />
        </div>
        <h1 className="experience-text">EXPERIENCE</h1>
      </div>
    </div>
  );
}

export default AboutMe;
