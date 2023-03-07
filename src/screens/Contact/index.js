import React from "react";

function Contact() {
  return (
    <div className="sec1">
      <h1 className="suheading has-text-centered is-size-2 has-text-weight-normal mt-5 ">
        CONTACT
      </h1>
      <section id="contact" className="contact section has-text-centered">
        <div className="field has-text-centered">
          <div className="control">
            <input className="input" type="text" placeholder="Your Name*" />
          </div>
        </div>
        <div className="field has-text-centered">
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="E-Mail Address*"
            />
          </div>
        </div>
        <div className="field has-text-centered">
          <div className="control">
            <textarea
              className="textarea input"
              placeholder="Message*"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control mt-5">
            <button className="send-button button">SEND</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
