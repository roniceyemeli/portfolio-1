import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container"> 
            <ul>
              <li className="icon"><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
              <li className="icon"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
              <li className="icon"><a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a></li>
              <li className="icon"><a href="https://twitter.com/home"><i className="fab fa-twitter"></i></a></li>
              <li className="icon"><a href="https://github.com/home"><i className="fab fa-github"></i></a></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
