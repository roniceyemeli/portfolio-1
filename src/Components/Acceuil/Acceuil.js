import React from "react";
import about from "../../assets/image/about.png";
import "./Acceuil.css";

function Acceuil() {
  return (
    <div className="principal">
      <div className="moi">
        <div className="titre">
          <h1>What is Lorem Ipsum?</h1>
        </div>
        <div className="texte">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here
          </p>
        </div>
        <div className="boutton">
          <a href="https://drive.google.com/drive/u/0/folders/1ZhkFBqW5ewboXRKeBRWDR1XWs_DBdJej">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Mon cv
          </a>
        </div>
      </div>
      <div className="image">
        <img src={about} alt="about" />
      </div>
    </div>
  );
}

export default Acceuil;
