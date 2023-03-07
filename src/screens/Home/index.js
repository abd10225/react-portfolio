import React from "react";

function Home() {
  return (
    <div className="columns sec1">
      <div className="info-col column">
        <div className="circle-1">
          <h1 className="name"> HI IM ABDULLAH</h1>
          <h1 className="occu"> SOFTWARE ENGINEER</h1>
        </div>
        <h1 className="mail">abdalla0513@gmail.com</h1>
      </div>
      <div className="column has-text-centered mt-6   ">
        <img className="img" src="propic.jpeg" />
        <div className="icons mt-5">
          <i className="fa-brands fa-facebook fa-3x pr-5" />
          <i className="fa-brands fa-linkedin fa-3x pr-5" />
          <i className="fa-brands fa-square-twitter fa-3x pr-5" />
          <i className="fa-brands fa-square-instagram fa-3x" />
        </div>
      </div>
      <div className="column has-text-centered">
        <div className="circle-2">
          <i className="fa-solid fa-arrow-right fa-4x pt-6" />
        </div>
        <h1 className="about">ABOUT ME</h1>
      </div>
    </div>
  );
}

export default Home;
