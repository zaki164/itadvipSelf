import { Link } from "react-router-dom";
import { CustomButton, HamburgerButton, SelectLang } from "../Components";
import { data, images } from "../Constants";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="py-2 md:py-4 shadow-lg bg-white">
      <div className="custom-container flex_between">
        <Link to="/">
          <img
            src={images?.logo}
            alt="logo"
            className="max-sm:w-28 max-md:w-36 max-lg:w-40"
          />
        </Link>
        <div className="max-lg:hidden flex_center w-[60%] gap-3 md:gap-6">
          {data?.navLinks?.map((ele, i) => (
            <Link
              to={ele?.link}
              state={{ from: "public" }}
              key={i}
              className="font-medium transition-colors duration-300 hover:text-mainColor hover:scale-105"
            >
              {t(ele?.title)}
            </Link>
          ))}
          {/* <div className="flex items-center gap-3 md:gap-6"> */}
          {/* </div> */}
        </div>
        <div className="flex lg:gap-6 justify-end lg:justify-between flex-1">
          <SelectLang />
          <CustomButton
            title={t("طلب خدمة")}
            service
            url="/contact-us"
            className="max-lg:hidden"
          />
          <HamburgerButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
