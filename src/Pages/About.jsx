import { useTranslation } from "react-i18next";
import { Loader, OurTeam } from "../Components";
import WeInfoSection from "../Section/WeInfoSection";
import { useGetAboutDataQuery } from "../store/AboutApi";
import { useEffect } from "react";

const About = () => {
  const {
    data: AboutData,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetAboutDataQuery();
  const { i18n } = useTranslation();

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  return isFetching ? (
    <Loader component />
  ) : isError ? (
    <h1>{error?.data?.message}</h1>
  ) : (
    <>
      {/* <WeInfoSection
        data={AboutData?.data?.about?.[0]}
        // imgWidth="lg:w-[40%]"
        // textWidth="lg:w-[60%]"
        reverse
        // maxWidthText="lg:max-w-2xl"
      />
      <WeInfoSection data={AboutData?.data?.about?.[1]} gap="gap-12" /> */}
      {AboutData?.data?.about?.map((sectionData, i) => (
        <WeInfoSection data={sectionData} reverse={i % 2 !== 0} key={i} />
      ))}
      <OurTeam data={AboutData?.data?.members} />
    </>
  );
};

export default About;
