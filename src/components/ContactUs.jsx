import React from 'react'
import "./ContactUs.css"
import contact from "../assets/contactus.webp"

const ContactUs = () => {
  return (
    
    <form>
    <div className="contact-container">
      {/* Left: Form */}
      <div className="contact-form-col">
        <div>
          <h1 className="contact-title">Get In Touch 24x7</h1>
          <p className="contact-subtitle">
            Our friendly team would love to hear from you.
          </p>
        </div>
        <div className="contact-fields">
          <div className="contact-row gap-3">
            <div className="contact-field contact-half">
              <label htmlFor="firstName" className="contact-label">First Name</label>
              <input id="firstName" name="firstName" type="text" className="contact-input" placeholder="First Name"/>
            </div>
            <div className="contact-field contact-half">
              <label htmlFor="lastName" className="contact-label">Last Name</label>
              <input id="lastName" name="lastName" type="text" className="contact-input" placeholder="Last Name"/>
            </div>
          </div>
          <div className="my-3">
            <div className="contact-field contact-wide">
              <label htmlFor="email" className="contact-label">Email</label>
              <input id="email" name="email" type="text" className="contact-input" placeholder="Email"/>
            </div>
            <div className="contact-field contact-wide">
              <label htmlFor="phoneNumber" className="contact-label">Phone number</label>
              <input id="phoneNumber" name="phoneNumber" type="tel" className="contact-input" placeholder="Phone number"/>
            </div>
            <div className="contact-field contact-wide">
              <label htmlFor="message" className="contact-label">Message</label>
              <input id="message" name="message" type="text" className="contact-input" placeholder="Message"/>
            </div>
            <div className="contact-field contact-wide">
              <label htmlFor="referredBy" className="contact-label">How did you hear about us?</label>
              <select id="referredBy" name="referredBy" className="contact-input" defaultValue="">
                <option value="">Select</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Discord">Discord</option>
                <option value="Twitter">Twitter</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Youtube">Youtube</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="contact-submit-btn">
            Be a Part of the Future
          </button>
        </div>
      </div>
      {/* Right: Image */}
      <div className="contact-img-col">
        <div className="contact-img-wrap">
          <img
            className="contact-img"
            src={contact}
            alt=""
          />
        </div>
      </div>
    </div>
  </form>
  )
}

export default ContactUs
