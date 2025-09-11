import "./Plan.css";

const Plan = () => {
  return (
    <>
    <div className="price-container">
      <div className="price-row">
        {/* Free Plan */}
        <div
          className="price border-opacity"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-anchor="#trigger-right"
          data-aos-anchor-placement="top-center"
        >
 
          <div className="price-content">
            <h1 className="price-title">
              Free <span className="price-subtitle">(100 credits)</span>
            </h1>
            <p className="price-desc">
              For anyone who is interested and wants to try image generation.
            </p>
            <h1 className="price-price">$ 0/month*</h1>
            <br />
            <div className="button-container">
              <button className="price-button try-for-free">Try for Free</button>
            </div>
          </div>
          <div className="price-features">
            <p>✓ <span>  5 GB Storage</span></p>
            <p>✓ <span>Limited Photos by unsplash</span></p>
            <p>✓ <span>Unlimited Projects</span></p>
            <p>✓ <span>Watermark Included</span></p>
            <p>✓ <span>Unlock 25 Backgrounds</span></p>
          </div>
        </div>

        {/* Plus Plan */}
        <div
          className="price border-opacity"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-anchor="#trigger-right"
          data-aos-anchor-placement="top-center"
        >

          <div className="price-content">
            <h1 className="price-title">Plus</h1>
            <p className="price-desc">
              Meet your goals and accomplish more with Advanced AI features.
            </p>
            <h1 className="price-price">$ 20/month*</h1>
            <br />
            <div className="button-container">
              <button className="price-button get-plus">Get Plus</button>
            </div>
          </div>
          <div className="price-features">
            <p>✓ <span>50 GB Storage</span></p>
            <p>✓ <span>Unlimited Photos by unsplash</span></p>
            <p>✓ <span>Unlimited Projects</span></p>
            <p>✓ <span>Watermark Not Included</span></p>
            <p>✓ <span>Unlock 150 Backgrounds</span></p>
          </div>
        </div>

        {/* Pro Plan */}
        <div
          className="price"
          data-aos="fade-left"
          data-aos-delay="900"
          data-aos-anchor="#trigger-right"
          data-aos-anchor-placement="top-center"
        >

          <div className="price-content">
            <h1 className="price-title">Pro</h1>
            <p className="price-desc">
              Collaborate in teams of all sizes and scale your brand with better ROI.
            </p>
            <h1 className="price-price">$ 50/month*</h1>
            <br />
            <div className="button-container">
              <button className="price-button be-a-pro">Be a Pro</button>
            </div>
          </div>
          <div className="price-features">
            <p>✓ <span>100 GB Storage</span></p>
            <p>✓ <span>Unlimited Photos by unsplash</span></p>
            <p>✓ <span>Unlimited Projects</span></p>
            <p>✓ <span>Watermark Not Included</span></p>
            <p>✓ <span>Unlock 250+ Backgrounds</span></p>
          </div>
        </div>
      </div>

        
    </div>
    <button className='button  btn'> Compare</button>

    </>

  );
};

export default Plan;