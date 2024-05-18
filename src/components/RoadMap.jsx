import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { loading1, check2 } from "../assets";
import { roadmap } from "../constants";
import TagLine from "./TagLine";
import { Gradient } from "./design/Roadmap";
import { GradientLight } from "./design/Roadmap";
import ButtonBot from "./ButtonBottom";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading
        tag="We are commited to continue improving..."
        title="We develop. You Interact."
      />

      <div className="absolute inset-0 translate-y-[10rem] z-0">
        <GradientLight />
      </div>
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-blue-100 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full"></div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <TagLine>{item.date}</TagLine>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-2 -mx-15">
                    <img
                      className=" w-2/3 mx-auto border-1 border-black rounded-2xl"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <ButtonBot href="">Contact us!</ButtonBot>
      </div>
    </div>
  </Section>
);

export default Roadmap;
