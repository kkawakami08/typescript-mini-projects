import SkeletonCard from "@/components/ctrl-start/SkeletonCard";

const LoadingPage = () => {
  const skeletonArray = Array.from(
    { length: 15 },
    (_, index) => `Item ${index + 1}`
  );
  return (
    <div className="flex flex-col gap-5 py-5  items-center md:grid md:grid-cols-2 md:justify-items-center 2xl:grid-cols-3 ">
      {skeletonArray.map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default LoadingPage;
