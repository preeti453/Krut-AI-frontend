
import "./Plan.css";
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const PersonRemoveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
  </svg>
);

const PersonAddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
    <path d="M18 9h3M19.5 7.5v3" />
  </svg>
);

const Plan = ({ showExtra = true, showFeatures = true, showButton = true }) => {
  const [plusUserCount, setPlusUserCount] = useState(1);
  const [proUserCount, setProUserCount] = useState(1);

  const pricePerUserPlus = 20;
  const pricePerUserPro = 50;

  const plusPrice = plusUserCount * pricePerUserPlus;
  const proPrice = proUserCount * pricePerUserPro;

  const handlePlusDecrement = () => plusUserCount > 1 && setPlusUserCount(plusUserCount - 1);
  const handlePlusIncrement = () => setPlusUserCount(plusUserCount + 1);

  const handleProDecrement = () => proUserCount > 1 && setProUserCount(proUserCount - 1);
  const handleProIncrement = () => setProUserCount(proUserCount + 1);

  const navigate = useNavigate()

  return (
    <>
      <div className="price-container">
        <div className="price-row">
          {/* Free Plan */}
          <div className="price border-opacity">
            <div className="price-content">
              <h1 className="price-title">
                Free <span className="price-subtitle">(100 credits)</span>
              </h1>
              <p className="price-desc">
                For anyone who is interested and wants to try image generation.
              </p>
              <h1 className="price-price">$ 0/month*</h1>
              <br />

              {/* Extra Section → only visible if showExtra = true */}
              {showExtra && (
                <div className="user-count-container h-16 mb-3 visibility">
                  <div className="user-count-inner flex items-center justify-center h-full relative">
                    <div className="user-count-content w-[75%]">
                      <div className="user-count-controls flex items-center justify-center mb-5 text-white">
                        <button
                          className="user-btn-disabled mx-2 px-4 py-2 border rounded-lg text-2xl border-gray-500 text-gray-500 cursor-default"
                          onClick={handlePlusDecrement}
                          aria-label="Decrease users"
                        >
                          <PersonRemoveIcon />
                        </button>
                        <div className="user-count-number min-w-14 xl:min-w-16 text-center text-2xl font-bold">1 x</div>
                        <button
                          onClick={handlePlusIncrement}
                          className="user-btn-active mx-2 px-4 py-2 border rounded-lg text-2xl hover:bg-krutNeon hover:text-black hover:border-black zoomEffect"
                          aria-label="Increase users"
                        >
                          <PersonAddIcon />
                        </button>
                      </div>
                      <div className="user-contact text-center">
                        <p className="text-sm">
                          More Than 10 Users? <span className="text-krutNeon cursor-pointer">Contact<span className="text-transparent text-xs">.</span>Us</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="button-container">
                <button onClick={() => navigate("/login")} className="price-button try-for-free">Try for Free</button>
              </div>
            </div>

            {/* Features → only visible if showFeatures = true */}
            {showFeatures && (
              <div className="price-features">
                <p>✓ <span> 5 GB Storage</span></p>
                <p>✓ <span>Limited Photos by unsplash</span></p>
                <p>✓ <span>Unlimited Projects</span></p>
                <p>✓ <span>Watermark Included</span></p>
                <p>✓ <span>Unlock 25 Backgrounds</span></p>
              </div>
            )}
          </div>

          {/* Plus Plan */}
          <div className="price border-opacity">
            <div className="price-content">
              <h1 className="price-title">Plus</h1>
              <p className="price-desc">
                Meet your goals and accomplish more with Advanced AI features.
              </p>
              <h1 className="price-price"> $ {plusPrice}/month* </h1>
              <br />

              {showExtra && (
                <div className="user-count-container h-16 mb-3">
                  <div className="user-count-inner flex items-center justify-center h-full relative">
                    <div className="user-count-content w-[75%]">
                      <div className="user-count-controls flex items-center justify-center mb-5 text-white">
                        <button
                          onClick={handlePlusDecrement}
                          className="user-btn-disabled mx-2 px-4 py-2 border rounded-lg text-2xl border-gray-500 text-gray-500 cursor-pointer"
                          aria-label="Decrease users">
                          <PersonRemoveIcon />
                        </button>
                        <div className="user-count-number min-w-14 xl:min-w-16 text-center text-2xl font-bold">
                          {plusUserCount} x
                        </div>
                        <button
                          onClick={handlePlusIncrement}
                          className="user-btn-active mx-2 px-4 py-2 border rounded-lg text-2xl hover:bg-krutNeon hover:text-black hover:border-black zoomEffect"
                          aria-label="Increase users">
                          <PersonAddIcon />
                        </button>
                      </div>
                      <div className="user-contact text-center">
                        <p className="text-sm">
                          More Than 10 Users? <span className="text-krutNeon cursor-pointer">Contact<span className="text-transparent text-xs">.</span>Us</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="button-container">
                <button onClick={() => navigate("/login")} className="price-button get-plus">Get Plus</button>
              </div>
            </div>

            {showFeatures && (
              <div className="price-features">
                <p>✓ <span>50 GB Storage</span></p>
                <p>✓ <span>Unlimited Photos by unsplash</span></p>
                <p>✓ <span>Unlimited Projects</span></p>
                <p>✓ <span>Watermark Not Included</span></p>
                <p>✓ <span>Unlock 150 Backgrounds</span></p>
              </div>
            )}
          </div>

          {/* Pro Plan */}
          <div className="price">
            <div className="price-content">
              <h1 className="price-title">Pro</h1>
              <p className="price-desc">
                Collaborate in teams of all sizes and scale your brand with better ROI.
              </p>
              <h1 className="price-price">$ {proPrice}/month*</h1>
              <br />

              {showExtra && (
                <div className="user-count-container h-16 mb-3">
                  <div className="user-count-inner flex items-center justify-center h-full relative">
                    <div className="user-count-content w-[75%]">
                      <div className="user-count-controls flex items-center justify-center mb-5 text-white">
                        <button
                          onClick={handleProDecrement}
                          className="user-btn-disabled mx-2 px-4 py-2 border rounded-lg text-2xl border-gray-500 text-gray-500 cursor-pointer"
                          aria-label="Decrease users">
                          <PersonRemoveIcon />
                        </button>
                        <div className="user-count-number min-w-14 xl:min-w-16 text-center text-2xl font-bold">
                          {proUserCount} x
                        </div>
                        <button
                          onClick={handleProIncrement}
                          className="user-btn-active mx-2 px-4 py-2 border rounded-lg text-2xl hover:bg-krutNeon hover:text-black hover:border-black zoomEffect"
                          aria-label="Increase users">
                          <PersonAddIcon />
                        </button>
                      </div>
                      <div className="user-contact text-center">
                        <p className="text-sm">
                          More Than 10 Users? <span className="text-krutNeon cursor-pointer">Contact<span className="text-transparent text-xs">.</span>Us</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="button-container">
                <button onClick={() => navigate("/login")} className="price-button be-a-pro">Be a Pro</button>
              </div>
            </div>

            {showFeatures && (
              <div className="price-features">
                <p>✓ <span>100 GB Storage</span></p>
                <p>✓ <span>Unlimited Photos by unsplash</span></p>
                <p>✓ <span>Unlimited Projects</span></p>
                <p>✓ <span>Watermark Not Included</span></p>
                <p>✓ <span>Unlock 250+ Backgrounds</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
      {showButton && (
        <button onClick={() => navigate("/pricing")} className='button btn'> Compare</button>
      )}

    </>
  );
};

export default Plan;
