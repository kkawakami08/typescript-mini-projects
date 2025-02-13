import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgImg?: string | null;
}

const CardWrapper = ({ children, bgImg = null }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover  h-60 w-[26rem] md:w-full relative rounded-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-t h-60 from-black/50 to-transparent p-5 ">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
