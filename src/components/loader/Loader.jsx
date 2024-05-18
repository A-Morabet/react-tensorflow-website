import React from 'react'
import loaderImg from "../../assets/Spinner.gif"
import ReactDOM from 'react-dom'

function Loader() {
  return ReactDOM.createPortal (
    <div className='w-full relative z-3'>
        <div className='absolute inset-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 z-4'>
            <img className='absolute inset-0 mx-auto translate-y-64' src={loaderImg} width={256} height={256} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader