import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[3.025rem] -left-[1.25rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:-left-[0.625rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[3.025rem] -right-[1.25rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:-right-[0.625rem]`}
      />
    </>
  );
};

export default SectionSvg;
