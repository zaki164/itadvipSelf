import { ProjectReview } from "../Components";
import { data } from "../Constants";
import { ProjectInfo } from "../Section";

const Mandobak = () => {
  return (
    <>
      <ProjectInfo data={data?.MandobakData} />
      <ProjectReview appStoreLink="#" playStoreLink="#" />
    </>
  );
};

export default Mandobak;
