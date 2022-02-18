import "../App.css";
import Lottie from "react-lottie-player";
import Coder from "../resources/animation/Coder.json";
import { BsInputCursorText, BsBucket, BsTrophy } from "react-icons/bs";

const InformationalBox = () => {
  return (
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
  );
};

export default InformationalBox;
