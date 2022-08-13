import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container"> 
            <ul>
              <li className="icon"><i className="fab fa-facebook"></i></li>
              <li className="icon"><i className="fab fa-instagram"></i></li>
              <li className="icon"><i className="fab fa-whatsapp"></i></li>
              <li className="icon"><i className="fab fa-twitter"></i></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
