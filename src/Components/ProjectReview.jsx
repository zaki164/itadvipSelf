import { useTranslation } from "react-i18next";
import { images } from "../Constants";

const ProjectReview = ({ appStoreLink, playStoreLink, HuaweiStoreLink }) => {
  const { t } = useTranslation();
  return (
    <section className="flex_center flex-col gap-6 md:gap-8 font-medium px-4 pb-8 md:pb-12 pt-8 xs:pt-32 md:pt-20 lg:pt-36 2xl:pt-44 bg-violetColor/10">
      <h4 className="text-xl-2xl">{t("معاينة المشروع")}</h4>
      <p className="text-[#A7A7A7] text-sm-base">{t("متوفر علي")}</p>
      <div className="flex_center gap-4 md:gap-8">
        <a href={playStoreLink} target="_blank" className="flex-1">
          <img src={images?.PlayStore} alt="Play Store" />
        </a>
        <a href={appStoreLink} target="_blank" className="flex-1">
          <img src={images?.AppStore} alt="App Store" />
        </a>
        {HuaweiStoreLink && (
          <a href={HuaweiStoreLink} target="_blank" className="flex-1">
            <img
              src={images?.huawei}
              alt="Huawei Store"
              className=" md:w-[234px] md:h-[69px]"
            />
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectReview;
