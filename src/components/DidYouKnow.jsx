import React from "react";
import Section from "./Section";
import { didyouImg } from "../assets";

function DidYouKnow() {
  return (
    <Section id="didyouknow">
      <div className="container">
        <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 "></div>

        <div className="relative">
          <div className="relative z-1 flex items-center h-[35rem] mb-5 p-8 bg-gradient-to-b from-blue-400 to-n-8/0 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right p-0.5
                    md:scale-[2]
                    md:translate-x-[30%]
                    md:translate-y-[20%]
                    lg:scale-[2]
                    lg:translate-x-[45%]
                    lg:translate-y-[20%]"
                width={280}
                alt="family and animal gathering"
                height={730}
                src={didyouImg}
              />
            </div>

            <div className="relative z-1">
              <h2 className="h1 flex justify-center mb-[4rem] text-blue-800 bg-n-1/60 backdrop-blur-sm w-fit mx-auto border rounded-2xl p-1.5">
                Did you know...?
              </h2>
              <h2 className="h2 mb-4 text-center text-n-8 bg-blue-100/60 border rounded-2xl backdrop-blur p-2">
                ‘One in every three animal species that you see every day are
                considered exotic’{" "}
                <p className="body-2 text-n-6 text-center p-2">
                  Quoted from the Fauna and Fun Registry of North Carolina,
                  United States of America
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default DidYouKnow;
