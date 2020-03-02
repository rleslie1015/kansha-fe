import React from 'react'

function searchBar({user}){
    //style="width:200px;"
    return (
        <>
        
        <div className="custom-select">
            <select>
            <option className="placeholder-option"  value="" disabled selected hidden > Select your industry from dropdown</option>
            <option value={user.industry}>Accounting</option>
					<option value={user.industry}>Advertising/PR</option>
					<option value={user.industry}>Aerospace</option>
					<option value={user.industry}>Agriculture</option>
					<option value={user.industry}>Architecture</option>
					<option value={user.industry}>Airlines</option>
					<option value={user.industry}>Automotive</option>
					<option value={user.industry}>Banking/Finance</option>
					<option value={user.industry}>Business (general)</option>
					<option value={user.industry}>Communications</option>
					<option value={user.industry}>Education</option>
					<option value={user.industry}>Entertainment</option>
					<option value={user.industry}>Hospitality</option>
					<option value={user.industry}>IT/Computers/Technology</option>
					<option value={user.industry}>Legal</option>
					{/* <option value={user.industry}>Medical/Health Services</option> */}
  </select>
</div>
        </>
    )
}

export default searchBar