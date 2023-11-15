import { Link } from "react-router-dom";
import { data } from "../Constants";
import { FooterTitle } from "./";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const Footer = ({ footerData }) => {
  const { t } = useTranslation();
  const footerContact = [
    {
      title: t("رقم الجوال"),
      desc: `${footerData?.settings?.phone}+`,
      icon: <FiPhoneCall />,
      link: `tel:${footerData?.settings?.phone}`,
    },
    {
      title: t("البريد الالكتروني"),
      desc: footerData?.settings?.email,
      icon: <CiMail />,
      link: `mailto:${footerData?.settings?.email}`,
    },
    {
      title: t("العنوان"),
      desc: footerData?.settings?.address,
      icon: <CiLocationOn />,
    },
  ];

  return (
    <div className="bg-blueDark pb-3 md:pb-6 pt-7 md:pt-10">
      <div className="custom-container max-lg:justify-center flex-wrap flex lg:justify-between gap-8 md:gap-4 text-white">
        <div className="flex flex-col gap-6 w-full md:w-[45%] lg:w-[30%] lg:flex-1">
          <FooterTitle title={t("من نحن")} />
          <p className="text-sm-base font-medium leading-7 md:leading-10 w-[95%]">
            {footerData?.settings?.description}
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[45%] lg:w-[30%] lg:flex-1">
          <FooterTitle title={t("روابط مهمة")} />
          <ul className="leading-7 md:leading-10 flex flex-col gap-2">
            {data?.footerLinks?.map((ele, i) => (
              <li key={i}>
                <Link
                  to={ele?.link}
                  state={{ from: ele?.service ? "service" : "public" }}
                  key={i}
                  className="transition duration-300 hover:text-grayText"
                >
                  {t(ele?.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[45%] lg:w-[30%] lg:flex-1">
          <FooterTitle title={t("تواصل معنا")} />
          <ul className="leading-7 md:leading-10 flex flex-col gap-4">
            {footerContact?.map((ele, i) => (
              <li key={i} className="flex gap-2 md:gap-4 text-white">
                <span className="w-12 h-12 p-1 text-2xl border rounded-full flex_center">
                  {ele?.icon}
                </span>
                <div className="flex flex-col gap-1 md:gap-2 text-sm-base">
                  <p className="font-semibold">{ele?.title}</p>
                  {ele?.link ? (
                    <a
                      href={ele?.link}
                      rel="noreferrer"
                      aria-label={ele?.title}
                      className="text-white/50"
                      dir="rtl"
                    >
                      {ele?.desc}
                    </a>
                  ) : (
                    <p className="text-white/50">{ele?.desc}</p>
                  )}
                </div>
              </li>
            ))}
            <div className="flex gap-2 mt-3 md:mt-2">
              {footerData?.social_links?.map((ele, i) => (
                <a
                  href={ele?.link}
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={ele?.name}
                  className="w-3 h-3 md:w-5 md:h-5 rounded"
                >
                  <img src={ele?.light_image} alt={ele?.name} />
                </a>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
