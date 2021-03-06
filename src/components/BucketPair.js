import "../App.css";
import Lottie from "react-lottie-player";
import BucketFull from "../resources/animation/BucketFull.json";
import BucketEmpty from "../resources/animation/BucketEmpty.json";
import BucketPartial from "../resources/animation/BucketPartial.json";
import LakeAnim from "../resources/animation/LakeAnim.json";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BucketPair = ({ step, action, bucket1, bucket2, bucket1Capacity, bucket2Capacity }) => {
  return (
    <div>
      {action === "Fill" || action === "Dump" ? (
        <div className={`flex justify-between items-center bg-white w-full rounded-lg ${action === "Fill" ? "flex-row-reverse" : null} `}>
          <div className="flex flex-col items-center w-full p-2">
            <Lottie
              loop
              animationData={action === "Fill" ? BucketFull : BucketEmpty}
              play
              speed={1}
              style={{
                speed: 1,
                height: 60,
              }}
            />
            <span className="text-xl font-black text-blue-600">{bucket1} = { bucket1 === "y" ? bucket2Capacity : bucket1Capacity} </span>
          </div>
          <span className="flex items-center text-sm font-medium text-blue-600 ">
            {action}
            <HiOutlineArrowNarrowRight className="ml-2" />
          </span>
          <div className="flex flex-col items-center w-full p-2">
            <Lottie
              loop
              animationData={LakeAnim}
              play
              speed={1}
              style={{
                speed: 1,
                height: 60,
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between bg-white w-full rounded-lg">
          <div className="flex flex-col items-center w-full p-2">
            <Lottie
              loop
              animationData={BucketPartial}
              play
              speed={1}
              style={{
                speed: 1,
                height: 60,
              }}
            />
            <span className="text-xl font-black text-blue-600">{bucket1} = { bucket1 === "y" ? bucket2Capacity : bucket1Capacity}</span>
          </div>
          <span className="flex items-center text-sm font-medium text-blue-600 ">
            {action}
            <HiOutlineArrowNarrowRight className="ml-2" />
          </span>
          <div className="flex flex-col items-center w-full p-2">
            <Lottie
              loop
              animationData={BucketPartial}
              play
              speed={1}
              style={{
                speed: 1,
                height: 60,
              }}
            />
            <span className="text-xl font-black text-blue-600">{bucket2} = { bucket2 === "x" ? bucket1Capacity : bucket2Capacity}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BucketPair;
