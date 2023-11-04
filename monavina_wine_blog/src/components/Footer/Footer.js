import React from 'react';
import './Footer.scss'; // Import your CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            // TODO: add more links
          </ul>
          <p>&copy; 2023 Your Company</p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <a href="#">Email: info@yourcompany</a>
		  <a href="#">Whatsapp: +34xxxxxxxxx</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
