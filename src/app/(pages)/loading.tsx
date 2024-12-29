import Loader from "@/components/Loader";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center ">
    <Loader loaderSize={50}/>
    </div>
  );
};

export default LoadingSkeleton;
