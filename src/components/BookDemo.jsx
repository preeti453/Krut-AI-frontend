import React from 'react'
import "./BookDemo.css"
import { useState } from 'react'

const BookDemo = () => {

return(

    <form>
    <div className="bg-flex">
      <div className="bg-white demo-form-root">
        <div>
          <h1 className="demo-title">Book a Demo</h1>
          <p className="demo-subtitle">Get ready to experience the future</p>
        </div>
        <div className="demo-form-fields">
          {/* First and Last Name Row */}
          <div className="between-row">
            <div className="demo-field demo-half">
              <label htmlFor="firstName" className="demo-label">
                First Name
              </label>
              <input
                id="firstName"
                className="demo-input"
                type="text"
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div className="demo-field demo-half">
              <label htmlFor="lastName" className="demo-label">
                Last Name
              </label>
              <input
                id="lastName"
                className="demo-input"
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
            </div>
          </div>
          
          <div className="demo-field w-full">
            <label htmlFor="email" className="demo-label">
              Email
            </label>
            <input
              id="email"
              className="demo-input"
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>
         
          <div className="between-row my-3">
            <div className="demo-field demo-code">
              <label htmlFor="countryCodeIndex" className="demo-label">
                Code
              </label>
              <select
                id="countryCodeIndex"
                name="countryCodeIndex"
                className="demo-input"
                defaultValue="102"
              >
                <option value="102">India (+91)</option>
                
              </select>
            </div>
            <div className="demo-field demo-phone">
              <label htmlFor="phoneNumber" className="demo-label">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                className="demo-input"
                type="tel"
                placeholder="Phone number"
                name="phoneNumber"
              />
            </div>
          </div>
          
          <div className="demo-field w-full">
            <label htmlFor="profession" className="demo-label">
              Are you?
            </label>
            <select id="profession" name="profession" className="demo-input" defaultValue="">
              <option value="">Select</option>
              <option value="Creator">Creator</option>
              <option value="SMB">Small And Midsize Business</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Marketing Agency">Marketing Agency</option>
              <option value="Influencer Agency">Influencer Agency</option>
              <option value="Others">Others</option>
            </select>
          </div>
          
          <div className="demo-field w-full">
            <label htmlFor="referredBy" className="demo-label">
              How did you hear about us?
            </label>
            <select id="referredBy" name="referredBy" className="demo-input" defaultValue="">
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
         
          <div className="agree-row">
            <input
              id="privacyAgreement"
              type="checkbox"
              // className="demo-checkbox"
              name="privacyAgreement"
            />
            <label htmlFor="privacyAgreement" className="demo-agree-label">
              I have read and agree to the
              <a className="demo-link" href="/terms_and_conditions">
                Terms and Conditions
              </a>
              and accept the
              <a className="demo-link" href="/privacy_policy">
                Privacy Policy
              </a>
            </label>
          </div>
        </div>
       
        <div className="action-row">
          <button type="submit" className="demo-submit-btn">
            Be a Part of the Future
          </button>
        </div>
      </div>
    </div>
  </form>
);


}




export default BookDemo


