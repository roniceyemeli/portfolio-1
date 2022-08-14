import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
    <div className="label"><h2>Contact</h2></div>
    <div className="contact">
      <form className="form">
        <input type="text" id="fname" name="fname" />
        <textarea type="text" id="lname" name="lname" />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
