import { images } from "../Constants";

const Loader = ({ component }) => {
  return (
    <div
      className={`relative flex justify-center items-center w-full h-screen ${
        component
          ? "-mt-[110px] sm:-mt-[120px] md:-mt-[158px] lg:-mt-[170px]"
          : ""
      }`}
    >
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-violet-700"></div>
      <img src={images?.avatarThinking} className="rounded-full h-28 w-28" />
    </div>
  );
};

export default Loader;
