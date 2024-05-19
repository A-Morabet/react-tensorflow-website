import React from 'react'
import Section from './Section'
import {curve, lens} from '../assets'
import Button from './Button'
import { Gradient } from './design/Hero'
import { ScrollParallax } from "react-just-parallax"
import { useRef } from 'react'
import Generating from './Generating'
import Notification from './Notification'
import CompanyLogos from './CompanyLogos'


function Hero() {

    const parallaxRef = useRef(null);

    return (
        <Section
          className="pt-[8rem] -mt-[5.25rem]"
          circles
          circlesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[3.25rem]">
              <h1 className="h2 font-bold  sm:h1  md:h1 lg:h1 mb-6 mt-10">
                Discover the wonders of&nbsp;Animal&nbsp;Watching with {` `}
                <span className="inline-block relative">
                  ZooLens{" "}
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="underline"
                  />
                </span>
              </h1>
              <p className="body-1 max-w-3xl mx-auto mt-15 text-n-2">
                Discover the animal kingdom in a new light and share it with others with ZooLens, the ultimate animal AI analyzer app.
              </p> 
            </div>
            
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
              <div className="relative z-1 p-1 rounded-2xl bg-gradient-to-b from-blue-400 to-n-8/0 ">
               
                <div className="relative bg-n-8 rounded-[1rem]">
                 
    
                  <div className="aspect-[33/40] rounded-xl overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img
                      src={lens}
                      className="w-full scale-[1.5] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]
                      lg:scale-[1]"
                      width={1024}
                      height={490}
                      alt="frame"
                    />
    
                    <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
    
                    <ScrollParallax isAbsolutelyPositioned>
                    </ScrollParallax>
    
                    <ScrollParallax isAbsolutelyPositioned>
                      <Notification
                        className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[20rem] xl:flex"
                        title="This app is the best introduction to anyone looking to study animal breeds!"
                      />
                      
                    
                    </ScrollParallax>
                  </div>
                </div>
    
                <Gradient />
              </div>
              <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
               
              </div>
            </div>

          <div 
            className='w-full flex justify-center mt-[2rem]'>
            <Button href="" white>
                Start Now
              </Button>
              </div>
              
    
            <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
          </div>
    
        </Section>
      )
}

export default Hero