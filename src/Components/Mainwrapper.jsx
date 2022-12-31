import Lottie from "react-lottie-player";

const Mainwrapper = ({ children, odd, heading, animationData }) => {
  return (
    <div className={`flex justify-center w-full pt-[15vh] pb-[5vh] h-[100vh]`}>
      <div className="w-3/4 h-full">
        <div
          className={`flex h-full items-center ${odd && "flex-row-reverse"}`}
        >
          <div
            className={`w-1/2 flex items-center ${
              odd ? "justify-end" : "justify-start"
            } h-full`}
          >
            <Lottie
              play
              onScroll={true}
              animationData={animationData}
              style={{
                width: "75%",
              }}
            />
          </div>
          <div
            className={`w-1/2 h-full ${
              !odd && "text-right"
            } flex flex-col justify-center`}
          >
            <h1 className="text-4xl font-semibold text-center mb-10">
              {heading}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainwrapper;
