import { useTranslation } from "react-i18next";

const ProjectInfo = ({ data: ele }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="custom-container">
        {/* project Info section */}
        <section className="section_padding max-md:gap-3 flex max-md:flex-col-reverse">
          <div className="flex-1 md:w-[50%] max-sm:py-3 py-6 ps-3 lg:py-8 lg:ps-6 pe-5 lg:pe-20 rounded-3xl flex flex-col max-sm:gap-5 gap-6 lg:gap-10 xl:gap-6">
            <h6 className="text-violetColor text-2xl-3xl font-medium">
              {ele?.title}
            </h6>
            <p className="max-sm:text-xs text-sm md:text-base font-medium">
              {ele?.description}
            </p>
            <div className="flex justify-center max-sm:flex-col max-sm:gap-3 gap-6 md:gap-10 xl:mt-4">
              <div className="flex_center flex-col gap-2 md:gap-4 text-sm-base rounded-xl py-4 px-8 bg-violetColor/20 text-center">
                <p className="sm:whitespace-nowrap">{t("التقنيات")}</p>
                <p className="font-bold">{ele?.technologies}</p>
              </div>
              <div className="flex_center flex-col gap-2 md:gap-4 text-sm-base rounded-xl py-4 px-8 bg-violetColor/20 text-center">
                <p className="sm:whitespace-nowrap">{t("المنصات")}</p>
                <p className="font-bold">{ele?.platform}</p>
              </div>
            </div>
          </div>
          <div className="bg-red flex-1 md:w-[50%]">
            <img
              src={ele?.image}
              alt={ele?.title}
              className="rounded-3xl w-full h-full xl:h-[400px]"
            />
          </div>
        </section>
        {/* project screens section */}
        <section className="relative bg-violetColor/10 px-4 pt-4 md:pt-6 mt-6 sm:mt-20 mb-14 sm:mb-32 md:mb-52 lg:mb-96 xl:mb-96 pb-28 md:pb-44 rounded-[51px]">
          <h3 className="text-2xl-3xl font-medium text-center">
            {t("شاشات التطبيق")}
          </h3>
          <div
            className={`absolute rtl:right-0 ltr:left-0 mt-8 sm:mt-10 md:mt-14 grid gap-2 w-full z-30`}
            style={{
              gridTemplateColumns: `repeat(${ele?.images?.length}, minmax(0, 1fr))`,
            }}
          >
            {ele?.images?.map((screen, i) => (
              <div key={i} className="flex_center">
                <img src={screen?.image} alt="screen" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectInfo;
