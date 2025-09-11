import React from 'react'
// import './Pricing.css'
import './Price.css'

const Pricing = ({ plans }) => {

    return (
        <>


        <div className="price-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-wrapper">
        
            <div className="planCard">
              <div className='plancontent'>
              <h1 className="plan-name">{plan.name}</h1>
              <p className="plan-desc">{plan.description}</p>
              <h1 className="plan-price">{plan.price}</h1>

              <button
                className={`plan-btn ${
                  plan.buttonText === "Be a Pro" ? "highlight-btn" : ""
                }`}
              >
                {plan.buttonText}
              </button>
              </div>

            </div>

            
            <div className="features">
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}> ✓ &nbsp;&nbsp;{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

            <button className='button  btn'> Compare</button>

        </>


    )
}

export default Pricing

