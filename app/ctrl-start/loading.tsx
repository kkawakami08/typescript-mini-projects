import SkeletonCard from "@/components/ctrl-start/SkeletonCard";

const LoadingPage = () => {
  return (
    <div className="flex flex-col gap-5 py-5 items-center">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default LoadingPage;
