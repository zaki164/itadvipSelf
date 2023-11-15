import { useEffect, useRef } from "react";
import { data } from "../Constants";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useTranslation } from "react-i18next";

const HamburgerButton = () => {
  const { t } = useTranslation();
  const navref = useRef();
  const toggleref = useRef();
  const stopPropa = (e) => {
    e.stopPropagation();
  };
  const handleclassopen = (...ele) => {
    ele?.forEach((element) => {
      element.current.classList.toggle("open");
    });
  };
  const handlenav = (e) => {
    stopPropa(e);
    handleclassopen(toggleref, navref);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target !== toggleref) {
        if (navref.current.classList.contains("open")) {
          handleclassopen(toggleref, navref);
        }
      }
    });
  });

  return (
    <>
      <div className="toggle lg:hidden" ref={toggleref} onClick={handlenav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="pages lg:hidden" ref={navref}>
        {data?.navLinks?.map((ele, i) => (
          <Link
            to={ele?.link}
            key={i}
            className="text-mainColor text-base-l flex gap-2 p-4 duration-300 hover:ps-8 items-center"
          >
            <span className="text-mainColor">{ele?.icon}</span>
            {t(ele?.title)}
          </Link>
        ))}
        <div className="w-full p-4">
          <CustomButton title={t("طلب خدمة")} url="/contact-us" service />
        </div>
      </div>
    </>
  );
};

export default HamburgerButton;

{
  /* <IconButton
  className={`lg:!hidden !text-mainColor`}
  onClick={(event) => setAnchorEl(event.currentTarget)}
>
  <MenuIcon
    sx={{
      width: {
        xs: "1.75rem",
        sm: "2.25rem",
      },
      height: {
        xs: "1.75rem",
        sm: "2.25rem",
      },
    }}
  />
</IconButton>
<Menu
  className="lg:!hidden flex_center"
  anchorEl={anchorEl}
  open={open}
  onClose={() => setAnchorEl(null)}
  disableScrollLock
  sx={{
    "& .MuiPaper-root": {
      bgcolor: "#e9e9f0",
      borderRadius: 3,
      width: "100%",
      mt: 1,
    },
  }}
>
  {data?.navLinks?.map((ele, i) => (
    <MenuItem
      to={ele?.link}
      component={Link}
      key={i}
      onClick={() => setAnchorEl(null)}
      className="!font-SSTArabic !text-lg !text-mainColor"
      sx={{
        transition: "0.3s",
        p: 2,
        gap: 2,
        display: "flex",
        alignItems: "center",
        "&:hover": {
          pr: 3,
        },
      }}
    >
      <span className="text-mainColor">{ele.icon}</span>
      {ele?.title}
    </MenuItem>
  ))}
  {/* <MenuItem
    component={"li"}
    className="!font-SSTArabic !text-lg !text-mainColor !cursor-default"
    disableRipple
    sx={{
      p: 2,
      "&:hover": {
        bgcolor: "transparent",
      },
    }}
  >
    <span className="text-mainColor">
      <MdLanguage />
    </span>
    <SelectLang mobile />
  </MenuItem> */
}
// <MenuItem
//   className="!font-SSTArabic !text-lg !text-mainColor !cursor-default"
//   disableRipple
//   sx={{
//     p: 2,
//     "&:hover": {
//       bgcolor: "transparent",
//     },
//   }}
// >
//   <CustomButton
//     title="طلب خدمة"
//     url="/contact-us"
//     service
//     setAnchorNav={setAnchorEl}
//   />
// </MenuItem>
// </Menu> */}
