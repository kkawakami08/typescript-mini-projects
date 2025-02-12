import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgImg?: string | null;
}

const CardWrapper = ({ children, bgImg = null }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center min-h-60 max-w-[26rem] min-w-[22rem] relative rounded-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-t min-h-60 from-black/50 to-transparent p-5 ">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
