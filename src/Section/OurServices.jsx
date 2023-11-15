import { BsArrowLeftShort } from "react-icons/bs";
import { CustomHeader } from "../Components";

const OurServices = ({ data, header }) => {
  return (
    <section id="services" className="section_padding">
      <div className="custom-container flex flex-col gap-4">
        <CustomHeader header={header} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-4 md:mt-6 py-6 px-2">
          {data?.map((ele, i) => (
            <figure
              key={i}
              className="group rounded-3xl overflow-hidden relative z-20 flex flex-col gap-3 md:gap-6 p-6 pt-4 border border-grayColor bg-white transition duration-500 hover:text-white custom_shadow"
            >
              <span className="font-bold text-3xl-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-bold flex max-sm:gap-1 gap-3 md:gap-6 xl:gap-4 items-center text-sm-base whitespace-nowrap">
                {ele?.name}{" "}
                <span className="ltr:rotate-180 bg-black text-white transition duration-500 group-hover:bg-white group-hover:text-black rounded-full w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex_center text-2xl">
                  <BsArrowLeftShort />
                </span>
              </p>
              <div
                className={`-z-10 absolute top-0 rtl:left-0 ltr:right-0 rtl:-translate-x-1/3 ltr:translate-x-1/3 -translate-y-1/3 w-20 h-20 rounded-full animate-colorAnimation group-hover:animate-colorAnimationHover`}
                style={{ backgroundColor: ele?.color }}
              ></div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
