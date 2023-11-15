import { useTranslation } from "react-i18next";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Branches = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section className="section_padding flex flex-col gap-7 md:gap-10">
      <h2 className="text-3xl-4xl font-bold">{t("فروعنا")}</h2>
      <div className="max-lg:justify-center flex-wrap flex lg:justify-between gap-8">
        {data?.map((branch, i) => (
          <div
            className="flex-1 flex gap-2 md:gap-4 text-white bg-mainColor py-6 md:py-8 px-8 md:px-12 rounded-3xl"
            key={i}
          >
            <ul className="w-full leading-7 md:leading-10 flex flex-col gap-4 justify-between">
              <li className="flex gap-2 md:gap-4 text-white">
                <span className="w-12 h-12 p-1 text-2xl border rounded-full flex_center">
                  <FiPhoneCall />
                </span>
                <div className="flex flex-col gap-1 md:gap-2 text-sm-base">
                  <p className="font-semibold">{t("رقم الجوال")}</p>
                  <a
                    href={`tel:${branch?.phone}`}
                    rel="noreferrer"
                    aria-label={"phone"}
                    className="text-white/50"
                  >
                    {branch?.phone}+
                  </a>
                </div>
              </li>
              <li className="flex gap-2 md:gap-4 text-white">
                <span className="w-12 h-12 p-1 text-2xl border rounded-full flex_center">
                  <CiMail />
                </span>
                <div className="flex flex-col gap-1 md:gap-2 text-sm-base">
                  <p className="font-semibold">{t("البريد الالكتروني")}</p>
                  <a
                    href={`mailto:${branch?.email}`}
                    rel="noreferrer"
                    aria-label={"email"}
                    className="text-white/50"
                  >
                    {branch?.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-2 md:gap-4 text-white">
                <span className="w-12 h-12 p-1 text-2xl border rounded-full flex_center">
                  <CiLocationOn />
                </span>
                <div className="flex flex-col gap-1 md:gap-2 text-sm-base">
                  <p className="font-semibold">{t("العنوان")}</p>
                  <p className="text-white/50">{branch?.address}</p>
                </div>
              </li>
              <a
                href={branch?.map}
                target="_blank"
                className="w-full flex_center bg-[#FFCC59] text-white px-4 md:px-8 py-3 md:py-5 font-medium text-base-l rounded-3xl mt-3 duration-300 hover:bg-[#FFCC59]/80"
              >
                {t("عرض الخريطه")}
              </a>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
