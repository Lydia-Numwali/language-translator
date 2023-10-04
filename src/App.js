import React from 'react'
import { useState } from "react";
import "./App.css"

function App() {

  const {formData,setFormData} = useState({language:"french",message:""});

  const handleInputChange=(e)=>{
    setFormData({[e.target.name]:e.target.value})
    console.log(formData)
  }
  return (
    <div className='container'>
      <h1>Translator</h1>
      <form>
        <div className='choices'>
          <input type='radio' id='french' name='language' defaultChecked={formData.language} onChange={handleInputChange}/>
          <label for='French'>French</label>
          <input type='radio' id='spanish' name='language' onChange={handleInputChange}/>
          <label for='spanish'>Spanish</label>
          <input type='radio' id='Japanese' name='language' onChange={handleInputChange}/>
          <label for='Japanese'>Japanese</label>
        </div>
        <textarea name='message' placeholder='Message...' onChange={handleInputChange}></textarea>
        <div className='error'>Add text</div>
        <button type='submit'>Translate</button>
      </form>

      <div className='translation'>
        <div className='copy-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
</svg>

        </div>
        <div>Translated text</div>
      </div>
      <div className='notification active'>Copied to clipboard</div>
    </div>
  )
}

export default App
