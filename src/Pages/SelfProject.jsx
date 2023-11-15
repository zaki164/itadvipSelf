import { useParams } from "react-router-dom";
import { Loader, ProjectReview } from "../Components";
import { ProjectInfo } from "../Section";
import { useGetSingleProjectDataQuery } from "../store/SingleProjectApi";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SelfProject = () => {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const {
    data: singleProjectData,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetSingleProjectDataQuery(slug);

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  return isFetching ? (
    <Loader component />
  ) : isError ? (
    <h1>{error?.data?.message}</h1>
  ) : (
    <>
      <ProjectInfo data={singleProjectData?.data} />
      <ProjectReview
        appStoreLink={singleProjectData?.data?.apple_link}
        playStoreLink={singleProjectData?.data?.google_link}
        HuaweiStoreLink={singleProjectData?.data?.app_gallery_link}
      />
    </>
  );
};

export default SelfProject;
