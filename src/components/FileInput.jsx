import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import { loadGraphModel } from "@tensorflow/tfjs-converter";
import * as tfjs from "@tensorflow/tfjs";

import { TARGET_CLASSES } from "../target_classes";
import { convert } from "base64-to-tensor";
import TypewriterSpinner from "./Typewriter";

function FileInput() {
  const [imagePath, setImagePath] = useState();
  const [currentImage, setCurrentImage] = useState();
  const [finalRes, setFinalRes] = useState([]);
  const [loadedModel, setLoadedModel] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const imageRef = useRef();
  const textInputRef = useRef();

  useEffect(() => {
    loadModel();
  }, []);

  function handleChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        //console.log(e); make sure files loads correctly from input
        setImagePath(e.target.result);

        setCurrentImage(document.getElementById("image"));
      };

      
    }
  }

  function load(url) {
    return new Promise((resolve, reject) => {
      const imgElement = new Image();
      imgElement.crossOrigin = "anonymous";
      imgElement.src = url;
      imgElement.onload = () => {
        resolve(imgElement);
      };
    });
  }

  async function handleImageURL(e) {
    let cors = "https://corsproxy.io/?";

    setImagePath(cors + e.target.value);

    const image = await load(cors + e.target.value);
    // console.log(image); make sure files loads correctly from url

    setCurrentImage(image);
    let inputFile = (document.getElementById("upload").value = "");
  }

  async function loadModel() {
    tf.setBackend("webgl");

    const model = await loadGraphModel(
      "https://corsproxy.io/?https://github.com/A-Morabet/model-test/raw/main/model.json"
    );

    setLoadedModel(model);

    console.log("Model has been loaded succesfully...");
  }

  function startClassify() {
    activateSpinner();
    setFinalRes([]);
    setTimeout(classifyImage, 2200);
  }

  async function classifyImage() {

    let tensor = tfjs.browser
      .fromPixels(currentImage, 3)
      .resizeNearestNeighbor([300, 300])
      .expandDims()
      .toFloat()
      .reverse(-1);

    const predictions = await loadedModel.predict(tensor).data();
    //console.log(predictions); results of ai prediction

    let top5 = Array.from(predictions)
      .map(function (p, i) {
        
        return {
          probability: (p * 100).toFixed(2),
          className: TARGET_CLASSES[i], 
        };
      })
      .sort(function (a, b) {
        return b.probability - a.probability;
      })
      .slice(0, 2);

    console.log(top5);
    setFinalRes(top5);

    deactivateSpinner();
  }

  function activateSpinner() {
    setIsLoading(true);
  }

  function deactivateSpinner() {
    setIsLoading(false);
  }

  return (
    <>
      <div className="container flex flex-wrap border-2 rounded-xl my-4 bg-orange-400 ">
        <div className="flex flex-col mx-auto p-10 gap-10">
          <div className="flex-auto border-2 w-full bg-n-4 p-4 rounded-xl">
            <p className="font-semibold uppercase text-n-1 mb-2 text-center border-b-2 border-b-n-1 m-auto w-1/2">
              image preview
            </p>
            <img
              className="rounded-xl border-2 border-n-5 m-auto"
              src={imagePath}
              ref={imageRef}
              id="image"
              crossOrigin="anonymous"
              width={300}
              height={300}
            >
              
            </img>
          </div>
          <div className="p-4 border-2 bg-n-4 rounded-xl flex-auto">
            <div className="grid gap-5 place-items-center">
              <label
                className="block mb-2 text-md font-semibold text-white uppercase border-b-2 "
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                name=""
                onChange={handleChange}
              ></input>
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF.
              </p>
              <input
                className="text-center border-2 rounded-xl"
                type="text"
                placeholder="Paste image URL here"
                ref={textInputRef}
                onChange={handleImageURL}
              />
              <button
                className="border-2 bg-blue-400 rounded-md w-40 transition-colors hover:bg-blue-500"
                type="button"
                style={{ margin: "20px 0px" }}
                onClick={startClassify}
              >
                Classify
              </button>
            </div>
          </div>
        </div>

        {isLoading && (
          <table className="p-2 text-center m-auto w-[25rem]">
            <tbody className="flex flex-col border-2 bg-n-4 p-5 rounded-xl mb-16 mx-auto">
              <tr className="mx-auto">
                <td>
                  <p className="font-semibold uppercase text-n-1 mb-2 text-center border-b-2 border-b-n-1 m-auto">
                    predictions
                  </p>
                  <TypewriterSpinner />
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {finalRes.length > 0 && (
          <div className="flex flex-auto mb-16">
            <table className="p-2 text-center m-auto">
              <tbody className="flex flex-col border-2 bg-n-4 p-5 rounded-xl">
                <tr className="mx-auto">
                  <td>
                    <p className="font-semibold uppercase text-n-1 mb-2 text-center border-b-2 border-b-n-1 m-auto">
                      predictions
                    </p>
                  </td>
                </tr>
                {finalRes.length > 0 &&
                  finalRes.map((val, key) => {
                    return (
                      <tr className="border-b-2 p-5" key={key}>
                        <td
                          className={`p-5 uppercase ${
                            key === 0 && "font-bold text-n-1"
                          }`}
                        >
                          {val.className}
                        </td>
                        <td className={`${key === 0 && "font-bold text-n-1"}`}>
                          ({val.probability}%){" "}
                          {key === 0 && (
                            <span className="p-5 animate-pulse text-blue-400 uppercase">
                              winner
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default FileInput;
