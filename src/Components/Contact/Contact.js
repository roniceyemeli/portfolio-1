import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <form className="form">
          <h2>Contact</h2>
          <input
            placeholder="Entrer votre adresse email:"
            type="text"
            id="mail"
            name="mail"
          />
          <textarea
            placeholder="Message:"
            type="text"
            id="message"
            name="message"
          />
          <div className="btn">
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
