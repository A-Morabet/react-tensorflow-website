import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg'

function Section({
    className,
    id,
    circles,
    circlesOffset,
    customPaddings,
    children
}) {
    
  return (
    <div
    id={id}
    className={`
    relative 
    ${
      customPaddings ||
      `py-10 lg:py-16 xl:py-20 ${circles ? "lg:py-32 xl:py-40" : ""}`
    } 
    ${className || ""}`}>

        {children}

        <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1/20 pointer-events-none md:block lg:left-7.5 xl:left-10' />
        <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1/20 pointer-events-none md:block lg:right-7.5 xl:right-10' />

        {circles &&(
            <>
            <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1/20 ${circlesOffset && circlesOffset} pointer-events-none lg:block xl:left-10 right-8`} />

            <SectionSvg circlesOffset={circlesOffset}/>
            </>
            
        )}
       
        </div>
  )
}

export default Section