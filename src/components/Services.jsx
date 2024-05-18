import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  dogface,
  check,
} from "../assets";

import { zooLensAPI, zooLensIcons } from "../constants";

import { PhotoChatMessage, Gradient } from "./design/Services";

function Services() {
  return (
    <Section id="tech">
      <div className="container">
        <Heading
          title="Knowledge for life-learners."
          text="ZooLens opens a new world for you to behold."
        />

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service1}
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt="macaques in a natural sauna"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/60 lg:p-15">
              <h4 className="h4 mb-4 text-n-2">Image Identification</h4>
              <p className="body-2 mb-[3rem] text-n-1">
                Identify flawlessly which breed of animal your picture contains
                using our AI app whether its directly from your Camera, Gallery
                or Cloud Storage. Give it a whirl!
              </p>
            </div>

            <PhotoChatMessage
              bubble={`You're looking at two Japanese Macaques bathing!`}
              bubbleColor="bg-blue-500"
              bubbleWingColor="fill-blue-500/90"
              positionMain="top-[2rem] left-[7rem] sm:top-20 lg:top-[2rem] lg:left-[8rem]"
              icon="true"
            />
          </div>

          <div className="p-4 bg-n-2/40 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Dynamic Text Generation</h4>
              <p className="body-2 mb-[2rem] text-n-5">
                Our custom AI will analyze the contents of your picture and
                guess the animal's location, what is he currently doing it and
                why. As well as give you facts about him!
              </p>

              <ul className="flex items-center justify-between">
                {zooLensIcons.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img src={item} width={30} height={30} alt={item} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                src={service2}
                className="w-full h-full object-cover "
                width={520}
                height={400}
                alt="lion cub playing with adult lion"
              />

              <PhotoChatMessage
                bubble="There's a lion cub playing with his dad, he doesn't seem to happy about it..."
                bubbleColor="bg-blue-500"
                bubbleWingColor="fill-blue-500/90"
                positionMain="top-[9rem] left-[7rem] sm:top-[8rem] lg:top-[12rem] md:left-5"
                icon="true"
              />
            </div>
          </div>
        </div>

        {/* SECOND ROW OF BENTO */}

        <div className="relative z-1 grid gap-5 lg:grid-cols-2 mt-5  ">
          <div className="rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="relative min-h-[46rem] max-h-[46rem] bg-n-8 rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service3}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="planet earth"
                />

                <PhotoChatMessage
                  bubble={`I just saw a pure-bred Shiba Inu!`}
                  imgSrc={dogface}
                  bubbleColor="bg-red-500"
                  bubbleWingColor="fill-red-500/90"
                  positionMain="top-[16.5rem] left-[2rem] sm:left-24 md:left-5"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/40 lg:p-15">
                <h4 className="h4 mb-4 text-n-2">Build Communities</h4>
                <p className="body-2 mb-[3rem] text-n-1">
                  You can create or be a part of ZooLenser communities spanning
                  across multiple continents! Don't let this chance pass by!
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden lg:min-h-[35rem]">
            <div className="relative min-h-[46rem]  bg-n-8 rounded-xl overflow-hidden ">
              <div className="absolute inset-0">
                <img
                  src={service4}
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                  alt="leaderboard game photo"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/40 lg:p-15">
                <h4 className="h4 mb-4 text-n-2">Become the ultimate ZooLenser</h4>
                <p className="body-2 mb-[3rem] text-n-1">
                  All your achievements and findings will be recorded on your
                  ZooLens App! Compete on the worldwide leaderboard for the
                  highest spot!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mt-5 p-8 border-2 border-blue-500 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="programmer with happy dog"
                height={730}
                src={service5}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] mx-auto bg-n-1/60 rounded-2xl p-5 backdrop-blur md:ml-auto md:mx-0">
              <h4 className="h4 mb-4">Easy to run, Easy to Integrate</h4>
              <p className="body-2 mb-[3rem] text-n-7">
                Have an App and wish to harness the power of ZooLens? Our
                flexible API will do the job.
              </p>
              <ul className="body-2">
                {zooLensAPI.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
}

export default Services;
