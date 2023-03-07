import React from "react";

function Exp() {
  return (
    <div className="sec1">
      <h1 className="suheading has-text-centered is-size-2 has-text-weight-normal mt-5 ">
        EXPERIENCE
      </h1>
      <div className="columns sec1">
        <div className="info-col   column">
          <h1 className="sh" is-size-4>
            {" "}
            <p>
              worked in Befit Marketing plc for 1 year period in marketing field
              from 2017-2018.
              <br />
              <br />
              worked in align solutions Kandy in 2018 as a marketing team member
              .
              <br />
              <br />1 year experience in softwave solution as a software
              developer in 2020-2021
            </p>
          </h1>
          {/*<div class="circle"></div>*/}
          <h1 className="mail3">abdalla0513@gmail.com</h1>
        </div>
        <div className="column has-text-centered">
          <img className="img3 mt-5" src="experience.jpg" />
          <div className="circle-3">
            <i className="fa-solid fa-arrow-right fa-4x pt-6 " />
          </div>
          <h1 className="skills-text">SKILLS</h1>
        </div>
      </div>
    </div>
  );
}

export default Exp;
