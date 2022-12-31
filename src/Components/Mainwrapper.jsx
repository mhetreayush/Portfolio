import Lottie from "react-lottie-player";

const Mainwrapper = ({ children, reverse, heading, animationData }) => {
  return (
    <div className="flex justify-center w-full my-[10vh]">
      <div className="w-3/4 ">
        <div>
          <h1 className="text-lg font-semibold text-center py-4">{heading}</h1>
        </div>
        <div className={`flex  ${reverse && "flex-row-reverse"}`}>
          <div
            className={`w-1/2 flex items-center ${
              reverse ? "justify-end" : "justify-start"
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
          <div className={`w-1/2 ${!reverse && "text-right"}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Mainwrapper;
