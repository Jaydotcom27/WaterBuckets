import "./App.css";
import BucketsForm from "./components/BucketsForm";
import Lottie from "react-lottie-player";
import BgAnimData from "./resources/animation/BgAnimData.json";

function App() {
  return (
    <div className="bg-slate-100 flex h-screen w-screen items-center justify-center">
      <Lottie
        loop
        animationData={BgAnimData}
        play
        speed={1}
        style={{
          position: "absolute",
          zIndex: 1,
          speed: 0.1,
        }}
      />
      <BucketsForm></BucketsForm>
    </div>
  );
}

export default App;
