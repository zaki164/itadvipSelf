import { useTranslation } from "react-i18next";
import { CustomButton } from "../Components";

const LandingSection = ({ banner, features }) => {
  const { t } = useTranslation();
  return (
    <>
      {/* landing section */}
      <section className="bg-land min-h-[50vh] flex_center mt-6">
        <div className="custom-container flex-col flex_center text-center gap-4 md:gap-10 text-black">
          <h1 className="font-bold text-2xl-3xl">
            {t("في")} <span className="text-mainColor">{banner?.name}</span>
          </h1>
          <h2 className="font-bold text-3xl-4xl">{banner?.title}</h2>
          <h3 className="font-semibold text-xl-2xl max-w-xl">
            {banner?.sub_title}
          </h3>
          <div className="flex gap-6 max-xs:gap-4 max-sm:mt-3 max-xs:flex-col">
            <CustomButton
              title={t("طلب خدمة")}
              url="/contact-us"
              service
              contained
            />
            <CustomButton title={t("تواصل معنا")} url="/contact-us" />
          </div>
        </div>
      </section>

      {/* features section */}
      <section className="section_padding">
        <div className="custom-container max-lg:justify-center flex-wrap flex lg:justify-between gap-4">
          {features?.map((feat, i) => (
            <figure
              key={i}
              className={`group relative z-10 overflow-hidden text-black flex w-full md:w-[45%] lg:w-[30%] lg:flex-1 flex-col gap-4 md:gap-6 rounded-xl py-8 px-4`}
            >
              <div
                className="-z-10 absolute w-full h-full top-0 left-0 duration-500 group-hover:!opacity-50 border"
                style={{
                  backgroundColor: feat?.color,
                  borderColor: feat?.color,
                  opacity: 0.15,
                }}
              ></div>
              <div className="flex gap-3 md:gap-5 items-center font-bold">
                <img src={feat?.image} alt="icon" className="max-md:w-6" />
                <h4 className="text-2xl-3xl">{feat?.title}</h4>
              </div>
              <p className="text-base-l font-semibold">{feat?.description}</p>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingSection;
