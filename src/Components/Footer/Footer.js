import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container"> 
            <ul>
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a></li>
              <li><a href="https://twitter.com/home"><i className="fab fa-twitter"></i></a></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
