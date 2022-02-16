import "../App.css";
import Lottie from "react-lottie-player";
import BucketFull from "../resources/BuketFull.json";

function Bucket(params) {
  return (
    <div className="">
      <Lottie
        loop
        animationData={BucketFull}
        play
        speed={1}
        style={{
          speed: 1,
        }}
      />
    </div>
  );
}

export default Bucket;
