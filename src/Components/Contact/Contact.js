import React, { useRef,useState } from "react";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [text , setText] = useState('')
  const [message , setMessage] = useState('')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxx7yqn",
        "template_ku1vk8m",
        form.current,
        "KnpSwhuXxsyMxnLxJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function Supprimer()
{
    var formulaire = document.getElementsByClassName("form");
    formulaire.removeChild(form.lastChild);
}

  return (
    <>
      <div className="contact">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h2>Contact</h2>
          <input
            placeholder="Entrer votre adresse email:"
            type="text"
            id="user_email"
            name="user_email"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          />
          <textarea
            placeholder="Message:"
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
          />
          <div className="btn">
            <button
              onClick={() => {
                swal({
                  text: "Message envoyer",
                  icon: "success",
                });
               
                
              }}
              onChange={() => {
                Supprimer()
              }}
              type="submit"
              value="Submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
