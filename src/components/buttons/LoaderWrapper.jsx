import Loader from "react-loader-spinner";

const LoaderWrapper = () => {
  return (
    <div className="loader__wrapper">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={9000}
      />
    </div>
  );
};

export default LoaderWrapper;
