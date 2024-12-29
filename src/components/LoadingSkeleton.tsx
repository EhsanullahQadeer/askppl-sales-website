import Skeleton, { SkeletonProps } from "react-loading-skeleton";


interface IProps extends SkeletonProps {
  classes?: string;
}

const LoadingSkeleton = (props: IProps) => {
  const { width, height, count, classes } = props;
  return (
    <Skeleton
      width={width ?? "100%"}
      height={height ?? "100%"}
      {...(count ? { count } : {})}
      baseColor="#1A1A1A"
      highlightColor="#2A2A2A"
      className={classes}
      {...props}
    />
  );
};

export default LoadingSkeleton;
