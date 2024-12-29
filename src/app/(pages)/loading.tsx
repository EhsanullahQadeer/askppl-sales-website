import Loader from "@/components/Loader";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center ">
      <div className="absolute top-1/2 -translate-y-1/2 h-[100px] w-[100px]">
        <Loader loaderSize={50} />
      </div>
    </div>
  );
};

export default Loading;
