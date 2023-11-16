import {
  LandingSection,
  WeInfoSection,
  CeoWord,
  OurProjects,
  OurServices,
} from "../Section";
import { useGetHomeDataQuery } from "../store/HomeApi";
import { Loader } from "../Components";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const { t, i18n } = useTranslation();
  const {
    data: homeData,
    isError,
    error,
    refetch,
    isFetching,
  } = useGetHomeDataQuery();

  const WeInfoOptions = {
    link: "/about-us",
    linkTitle: t("تعرف علينا"),
    // imgStyle: "w-full h-full",
    // imgWidth: "lg:w-[60%]",
    // textWidth: "lg:w-[40%]",
    // maxWidthText: "max-w-lg",
  };

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  return isFetching ? (
    <Loader component />
  ) : isError ? (
    <h1>{error?.data?.message}</h1>
  ) : (
    <>
      <Helmet>
        <title>{t("ايتاد")}</title>
        <meta name="description" content={t("نعريف بنا")} />
      </Helmet>
      <LandingSection
        banner={homeData?.data?.banner}
        features={homeData?.data?.features}
      />
      <WeInfoSection data={homeData?.data?.about} {...WeInfoOptions} />
      <OurServices
        data={homeData?.data?.services}
        header={homeData?.data?.header1}
      />
      <OurProjects
        data={homeData?.data?.projects}
        header={homeData?.data?.header2}
      />
      <CeoWord data={homeData?.data?.ceo_message} />
    </>
  );
};

export default Home;
