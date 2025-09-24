import React from 'react'
import "./PricingTable.css"


const PricingTable = () => {
 
  
const rows = [
  { feature: "Storage", free: ["✓", "5 GB"], plus: ["✓", "50 GB"], pro: ["✓", "100 GB"] },
  { feature: "Unsplash Quota", free: ["𐤕", "Not Included"], plus: ["✓", "Unlimited"], pro: ["✓", "Unlimited"] },
  { feature: "Watermark", free: ["✓", "Included"], plus: ["𐤕", "Not Included"], pro: ["𐤕", "Not Included"] },
  { feature: "Clean Anything", free: ["𐤕", "Not Included"], plus: ["✓", "Included"], pro: ["✓", "Included"] },
  { feature: "Number of Design Templates", free: ["✓", "Unlimited"], plus: ["✓", "Unlimited"], pro: ["✓", "Unlimited"] },
  { feature: "Custom Designs", free: ["✓", "Included"], plus: ["✓", "Included"], pro: ["✓", "Included"] },
  { feature: "Customized Brand Colours", free: ["✓", "Included"], plus: ["✓", "Included"], pro: ["✓", "Included"] },
  { feature: "Customized Brand Font", free: ["✓", "Included"], plus: ["✓", "Included"], pro: ["✓", "Included"] },
  { feature: "Number of Downloads (per month)", free: ["✓", "20"], plus: ["✓", "80"], pro: ["✓", "600"] },
  { feature: "Save Design as Template", free: ["𐤕", "Not Included"], plus: ["✓", "Included"], pro: ["✓", "Included"] },
  { feature: "Folder Creation", free: ["✓", "Unlimited"], plus: ["✓", "Unlimited"], pro: ["✓", "Unlimited"] },
  { feature: "Download Format", free: ["✓", "JPG, PNG, SVG"], plus: ["✓", "JPG, PNG, SVG"], pro: ["✓", "JPG, PNG, SVG"] },
  { feature: "Contact Method", free: ["✓", "Forms"], plus: ["✓", "Forms & Calls"], pro: ["✓", "Forms & Calls"] },
  { feature: "Availability", free: ["✓", "24x7"], plus: ["✓", "24x7 Priority"], pro: ["✓", "24x7 Priority"] },
];


  return (
    <>
    
     <div className="unique-pricing-container">
      <table className="unique-pricing-table">
        <thead>
          <tr className="unique-pricing-header-row">
            <th></th>
            <th>Free</th>
            <th>Plus</th>
            <th>Pro</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ feature, free, plus, pro}, index) => (
            <tr key={index} className="unique-pricing-row">
              <td className="unique-feature-cell">{feature}</td>
              {[free, plus, pro].map(([icon, text], i) => (
                <td key={i} className="unique-detail-cell">
                  <div className="unique-cell-content">
                    <span className="material-symbols-outlined unique-icon">{icon}</span>
                    <span className="unique-detail-text">{text}</span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      

    </div>

    </>
   
  );
  
}

export default PricingTable
