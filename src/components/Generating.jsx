import React from 'react'
import {loading} from "../assets"

function Generating({className}) {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-1/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <img 
        className="w-5 h-5 mr-4"
        src={loading}
        alt="Loading"
        />
        Analyzing Picture...
    </div>
  )
}

export default Generating