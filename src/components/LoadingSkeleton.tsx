import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  width?: string;
  height?: string;
  count?: number;
  classes?: string;
};

const LoadingSkeleton = (props: Props) => {
  const { width, height, count, classes } = props;
  return (
    <Skeleton
      width={width ?? "100%"}
      height={height ?? "100%"}
      {...(count ? { count } : {})}
      baseColor="#1A1A1A"
      highlightColor="#2A2A2A"
      className={classes}
    />
  );
};

export default LoadingSkeleton;
