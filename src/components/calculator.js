import React from 'react'

function Calculator(){
	return( <div class="calculator">
				    <form>
				       <fieldset>
				          <legend>&nbsp;Calculate&nbsp;</legend>
				          <p>
				             <label>Instrument </label>
				             <select id = "instrumentList">
				               <option value = "1">guitar</option>
				               <option value = "2">bass</option>
				               <option value = "3">ukulele</option>
				               <option value = "4">mandolin</option>
				             </select>
				          </p>
				          <button></button>
				       </fieldset>
				    </form>
					</div> )
}

export default Calculator