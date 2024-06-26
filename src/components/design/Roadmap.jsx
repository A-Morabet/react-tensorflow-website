import { gradient } from "../../assets";

export const Gradient = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};

export const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/8 w-full aspect-square bg-radial-gradient from-[#56a8f0] to-[#fce5cd]/0 to-70% pointer-events-none" />
  );
};
