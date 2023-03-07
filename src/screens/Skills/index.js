import React from "react";

function Skills() {
  return (
    <div className="sec1">
      <h1 className="suheading has-text-centered is-size-2 has-text-weight-normal mt-5 ">
        SKILLS
      </h1>
      <div className="skills-grid-1 sec1">
        <div className="card has-text-centered">
          <img className="grid-image" src="html.png" />
          <p>HTML</p>
        </div>
        <div className="card has-text-centered">
          <img className="grid-image" src="css.png" />
          <p>CSS</p>
        </div>
        <div className="card has-text-centered">
          <img className="grid-image" src="php.png" />
          <p>PHP</p>
        </div>
      </div>
      <div className="skills-grid-2">
        <div className="card has-text-centered">
          <img className="grid-image" src="java.png" />
          <p>JAVA</p>
        </div>
        <div className="card has-text-centered">
          <img className="grid-image" src="python.png" />
          <p>PYTHON</p>
        </div>
      </div>
      <h1 className="mail-skills">abdalla0513@gmail.com</h1>
      <div className="skill-bottom has-text-centered">
        <div className="circle-skills">
          <i className="fa-solid fa-arrow-right fa-4x pt-6" />
        </div>
        <h1 className="about-skills">ABOUT ME</h1>
      </div>
    </div>
  );
}

export default Skills;
