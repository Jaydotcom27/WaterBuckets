import "../App.css";
import { useEffect, useState } from "react";
import { getHappyPath } from "../resources/BucketTranfers.js";
import BucketPair from "../components/BucketPair";
import Lottie from "react-lottie-player";
import CheckAnim from "../resources/CheckAnim.json";
import Coder from "../resources/Coder.json";
import ErrorAnim from "../resources/ErrorAnim.json";

import { BsInputCursorText, BsBucket, BsTrophy } from "react-icons/bs";

function BucketsForm() {
  const [bucketValues, setBucketValues] = useState({
    XValue: 0,
    YValue: 0,
    ZValue: 0,
  });

  const [optimalSteps, setOptimalSteps] = useState([]);

  const [triggerAnim, setTriggerAnim] = useState(false);

  const [animStatus, setAnimStatus] = useState(true);

  const handleInput = function (e) {
    setBucketValues({
      ...bucketValues,
      [e.target.name]: e.target.value,
    });
  };
  

  const calculateOptimalSteps = function () {
    const { XValue, YValue, ZValue } = bucketValues;
    setOptimalSteps(getHappyPath(XValue, YValue, ZValue));
    setTriggerAnim(true);
    setTimeout(() => setTriggerAnim(false), 2650);
  };

    useEffect(() => {
      if (optimalSteps[0] === "Error"){
        setAnimStatus(false) 
      }else{
        setAnimStatus(true);
      }
    },[optimalSteps]);

  return (
    <div className="flex w-3/5 h-4/5 rounded-lg z-10">
      <div className="w-1/2 h-full bg-blue-600 rounded-l-lg flex flex-col overflow-y-scroll items-center">
        {triggerAnim === true ? (
          <Lottie
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            loop={false}
            animationData={animStatus === true ? CheckAnim : ErrorAnim}
            play
            speed={1}
            style={{
              speed: 1,
              height: "100%",
              width: "100%"
            }}
          />
        ) : null}
        {optimalSteps.length !== 0 && !triggerAnim && optimalSteps[0] !== "Error" ? (
          <div className="w-full">
            {optimalSteps.map((step) => (
              <div className="w-full px-8 py-4">
                <span className="text-sm font-bold text-white ">
                  Step {step.Step}
                </span>
                <BucketPair
                  key={step.Step}
                  action={step.Action}
                  bucket1={step.Bucket1}
                  bucket2={step.Bucket2}
                  bucket1Capacity={bucketValues.XValue}
                  bucket2Capacity={bucketValues.YValue}
                ></BucketPair>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {!triggerAnim ? (
              <div className="p-8 h-full">
                <div className="bg-white w-full p-4 h-1/2 rounded-md mb-4">
                  <Lottie
                    loop
                    animationData={Coder}
                    play
                    speed={1}
                    style={{
                      speed: 1,
                      height: "100%"
                    }}
                  />
                </div>
                <div className="flex flex-col h-1/2 justify-between">
                  <span className="text-left text-white font-bold text-xl mb-4">
                    The Water Bucket Challenge
                  </span>
                  <div className="flex items-center">
                    <div className="flex justify-center items-center text-blue-600 bg-white w-fit rounded-full p-2 mr-4">
                      <BsInputCursorText />
                    </div>
                    <span className="text-left text-white  text-xs my-2">
                      This application is expecting three inputs from you;{" "}
                      <span className="font-bold">Bucket X Capacity</span>,{" "}
                      <span className="font-bold">Bucket Y Capacity</span> and{" "}
                      <span className="font-bold">an amount to measure</span> by
                      using only those two buckets.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex justify-center items-center text-blue-600 bg-white w-fit rounded-full p-2 mr-4">
                      <BsBucket />
                    </div>
                    <span className="text-left text-white text-xs mb-2">
                      The Two Jugs Riddle was brought to fame by the old movie{" "}
                      <span className="font-bold">Die Hard 3</span>, and has a
                      solution based on a theorem from the subject of{" "}
                      <span className="font-bold">Number Theory</span> that we
                      will use here.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex justify-center items-center text-blue-600 bg-white w-fit rounded-full p-2 mr-4">
                      <BsTrophy />
                    </div>
                    <span className="text-left text-white text-xs mb-2">
                      Keep in mind that in order to get a succesful result, the
                      theorem indicates that the{" "}
                      <span className="font-bold">
                        Greatest Common Divisor
                      </span>{" "}
                      of X and Y has to divide Z.
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div className="w-1/2 bg-white rounded-r-lg flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-4xl">Hello!</span>
          <span className="text-sm font-light mb-10">
            Submit your values to calculate
          </span>
        </div>
        <form className="flex flex-col w-9/12 h-1/4 mb-10">
          <div className="flex h-full mb-4">
            <div className="w-full h-full mr-3 p-1.5">
              <input
                onChange={handleInput}
                className="bg-slate-100 w-full h-full mr-3 p-1.5 border border-blue-600 rounded-md text-6xl text-center text-blue-600"
                type="number"
                name="XValue"
              ></input>
              <span className=" text-sm text-gray-400 font-normal">X Capacity</span>
            </div>
            <div className="w-full h-full mr-3 p-1.5">
              <input
                onChange={handleInput}
                className="bg-slate-100 w-full h-full mr-3 p-1.5 border border-blue-600 rounded-md text-6xl text-center text-blue-600"
                type="number"
                name="YValue"
              ></input>
              <span className=" text-sm text-gray-400 font-normal">Y Capacity</span>
            </div>
            <div className="w-full h-full mr-3 p-1.5">
              <input
                onChange={handleInput}
                className="bg-slate-100 w-full h-full mr-3 p-1.5 border border-blue-600 rounded-md text-6xl text-center text-blue-600"
                type="number"
                name="ZValue"
              ></input>
              <span className=" text-sm text-gray-400 font-normal">Z Capacity</span>
            </div>
          </div>
          {optimalSteps[0] === "Error" ? (
            <span className="my-2 text-red-500 font-medium text-sm">Detected Error: <span className="font-bold">{optimalSteps[1]}</span></span>
          ) : null}
          <div
            className="transition ease-in-out bg-blue-600 hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 hover:cursor-pointer duration-300 p-2 text-white rounded-md flex justify-center text-xl mt-10"
            onClick={calculateOptimalSteps}
          >
            Calculate
        </div>
        </form>
      </div>
    </div>
  );
}

export default BucketsForm;
