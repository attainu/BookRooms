import React from "react";
import "../styles/contact.css";
const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="section">
      <div className="container">
        <div className="contactinfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  2912 WhiteField
                  <br />
                  Bangalore <br />
                  200042
                </span>
              </li>
              <li>
                <span>Bookrooms@gmail.com</span>
              </li>
              <li>
                <span>310-357-1334</span>
              </li>
            </ul>
            <ul className="sci"></ul>
          </div>
        </div>
        <div className="contactForm">
          <h2>Send a message</h2>
          <div className="formBox">
            <div class="inputBox w50">
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="" required />
              <span>Last Name</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="" required />
              <span>Email Address</span>
            </div>
            <div class="inputBox w50">
              <input type="text" name="" required />
              <span>Mobile Number</span>
            </div>
            <div class="inputBox w100">
              <textarea name="" required></textarea>
              <span>Write your message here</span>
            </div>
            <div class="inputBox w100">
              <input type="submit" value="Send" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
