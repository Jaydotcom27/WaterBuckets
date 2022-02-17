import "../App.css";
import Lottie from "react-lottie-player";
import BucketFull from "../resources/BucketFull.json";
import BucketEmpty from "../resources/BucketEmpty.json";
import BucketPartial from "../resources/BucketPartial.json";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// function BucketPair({ Step, Action, Bucket1, Bucket2 }) {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 w-2/3 rounded-lg">
//       <div className="flex flex-col items-center ">
//         <Lottie
//           loop
//           animationData={BucketFull}
//           play
//           speed={1}
//           style={{
//             speed: 1,
//             height: 60,
//           }}
//         />
//         <span className="text-xl font-black text-blue-600">X</span>
//       </div>
//       <span className="flex items-center text-xl font-medium text-blue-600 ">
//         <span>{Action}</span>
//         <HiOutlineArrowNarrowRight className="ml-2" />
//       </span>
//       <div className="flex flex-col items-center ">
//         <Lottie
//           loop
//           animationData={BucketFull}
//           play
//           speed={1}
//           style={{
//             speed: 1,
//             height: 60,
//           }}
//         />
//         <span className="text-xl font-black text-blue-600">Y</span>
//       </div>
//     </div>
//   );
// }

const BucketPair = ({ step, action, bucket1, bucket2 }) => {
  return (
    <div>
      {action === "Fill" || action === "Dump" ? (
        <div className="flex justify-between bg-white w-full rounded-lg">
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
            <span className="text-xl font-black text-blue-600">{bucket1}</span>
          </div>
          <span className="flex items-center text-sm font-medium text-blue-600 ">
            {action}
            <HiOutlineArrowNarrowRight className="ml-2" />
          </span>
          <div className="w-full">placeholder</div>
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
            <span className="text-xl font-black text-blue-600">{bucket1}</span>
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
            <span className="text-xl font-black text-blue-600">{bucket2}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BucketPair;
