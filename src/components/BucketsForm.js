import "../App.css";
import { useEffect, useState } from "react";
import { getHappyPath } from "../resources/BucketTranfers.js"
// import Bucket from "../components/Bucket";

function BucketsForm() {
  const [bucketValues, setBucketValues] = useState({
    XValue: 0,
    YValue: 0,
    ZValue: 0,
  });

  const [optimalSteps, setOptimalSteps] = useState([]);

  const handleInput = function (e) {
    setBucketValues({
      ...bucketValues,
      [e.target.name]: e.target.value,
    });
  };

  const sum = function () {
    const { XValue, YValue, ZValue } = bucketValues;
    setOptimalSteps(
      getHappyPath(XValue, YValue, ZValue),
      console.log(optimalSteps),
    );
  };

  return (
    <div className="flex w-3/5 h-4/5 rounded-lg z-10">
      <div className="w-1/2 bg-blue-600 rounded-l-lg">
        <span>The bucket problem equals {optimalSteps}</span>
        {/* <Bucket params="1"></Bucket> */}
      </div>
      <div className="w-1/2 bg-white rounded-r-lg flex flex-col items-center justify-center">
        <span className="text-4xl">Hello!</span>
        <span className="text-sm font-light mb-10">
          Submit your values to calculate
        </span>
        <form className="flex flex-col w-9/12">
          <input
            onChange={handleInput}
            placeholder="Bucket X capacity"
            className="bg-slate-100 w-full mb-4 p-1.5 border border-slate-200 rounded-md"
            type="number"
            name="XValue"
          ></input>
          <input
            onChange={handleInput}
            placeholder="Bucket Y capacity"
            className="bg-slate-100 mb-4 p-1.5 border border-slate-200 rounded-md"
            type="number"
            name="YValue"
          ></input>
          <input
            onChange={handleInput}
            placeholder="Goal"
            className="bg-slate-100  p-1.5 border border-slate-200 rounded-md mb-12"
            type="number"
            name="ZValue"
          ></input>
          <div
            className="bg-blue-600 p-1.5 text-white rounded-md"
            onClick={sum}
          >
            Calculate
          </div>
        </form>
      </div>
    </div>
  );
}

export default BucketsForm;
