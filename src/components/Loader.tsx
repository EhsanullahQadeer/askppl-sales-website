import { FC } from "react";

interface Props {
  loaderSize?: number;
}

const Loader: FC<Props> = () => {
  return <span className="loader"></span>;
};

export default Loader;
