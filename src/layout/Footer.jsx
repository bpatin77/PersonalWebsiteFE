import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  //capitalized F in footer
  return (
    <footer>
      <div className="footContent">
        <h2></h2>
        <nav>
          <ul className="footerLinks">
            <li>
              <button onClick={() => navigate("/help")}>Help</button>
            </li>
            <li>
              <button onClick={() => navigate("/social-media")}>
                Social Media
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/support")}>Support</button>
            </li>
            <li>
              <button onClick={() => navigate("/faqs")}>FAQs</button>
            </li>
            <li>
              <button onClick={() => navigate("/about-us")}>About Us</button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

