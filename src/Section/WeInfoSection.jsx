import { CustomButton } from "../Components";

const WeInfoSection = ({
  data,
  link,
  linkTitle,
  reverse,
  imgStyle,
  imgWidth,
  textWidth,
  gap,
  maxWidthText,
}) => {
  return (
    <section className="section_padding">
      <div
        className={`custom-container flex max-lg:flex-col max-lg:gap-4 ${
          gap ? gap : ""
        } ${reverse ? "flex-row-reverse" : ""}`}
      >
        <div className={`${imgWidth ? imgWidth : "lg:w-[50%]"} flex_center`}>
          <img
            src={data?.image}
            alt="weInfo"
            className={`${imgStyle ? imgStyle : "lg:max-h-[500px]"}`}
          />
        </div>
        <div
          className={`${
            textWidth ? textWidth : "lg:w-[50%]"
          } flex flex-col gap-4 lg:gap-6 pt-3 sm:pt-6 lg:pt-8`}
        >
          <p className="font-bold text-mainColor text-xl-2xl">{data?.title}</p>
          <h3 className="font-bold text-3xl-4xl">{data?.sub_title}</h3>
          <p
            className={`text-sm-base font-medium !leading-10 md:!leading-[50px] whitespace-pre-line ${
              maxWidthText ? maxWidthText : ""
            }`}
          >
            {data?.description}
          </p>
          {link && (
            <CustomButton
              url={link}
              title={linkTitle}
              arrow
              className={"lg:mt-6"}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default WeInfoSection;
