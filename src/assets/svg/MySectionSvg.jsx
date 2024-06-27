import AndroidSvg from "./MyAndroid17";

const MySectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <AndroidSvg
        className={`hidden absolute -top-[0.8125rem] left-[1.0625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[1.5rem]`}
      />

      <AndroidSvg
        className={`hidden absolute  -top-[0.8125rem] right-[0.025rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[0.6rem]`}
      />
    </>
  );
};

export default MySectionSvg;
