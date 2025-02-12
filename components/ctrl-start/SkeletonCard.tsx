import { FaImage } from "react-icons/fa";

const SkeletonCard = () => {
  return (
    <div className="bg-gray-100/70 min-h-60 max-w-[26rem] min-w-[22rem] relative rounded-2xl overflow-hidden p-5 ">
      <div className="animate-pulse">
        <FaImage className="absolute top-24 left-36 text-gray-200 size-20" />
        <div className="min-h-60 grid grid-cols-3 ">
          <div className="bg-gray-100/50 text-ctrl-start-green-900 rounded-lg h-fit flex justify-between p-2">
            <div className="size-5 bg-gray-100 rounded-lg"></div>
            <div className="size-5 bg-gray-100 rounded-lg"></div>
            <div className="size-5 bg-gray-100 rounded-lg"></div>
          </div>
          <div className="bg-gray-100/50 rounded-lg row-start-2 col-span-3  self-end p-2">
            <div className="bg-gray-100 w-full h-4 rounded-lg mx-auto"></div>
          </div>
          <div className="bg-gray-100/50 text-ctrl-start-green-900 rounded-lg place-self-end self-start w-10 flex items-center justify-center h-10 text-3xl font-extrabold  col-start-3 ">
            <div className="bg-gray-100 size-5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
