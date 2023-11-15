import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";

const SelectLang = ({ mobile }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [langOption, setLangOption] = useState("ar");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelection = (option) => {
    // setLangOption(option);
    i18n.changeLanguage(option);
    localStorage.setItem("language", option);
    handleClose();
  };

  useEffect(() => {
    if (i18n.language === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"));
  }, []);

  return (
    <>
      <Button
        id="selectButton"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className={`!font-bold !font-SSTArabic !gap-1 md:!gap-2 ${
          mobile ? "!text-mainColor" : "!text-black"
        }`}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {t("اللغه")}
      </Button>
      <Menu
        id="menu"
        MenuListProps={{
          "aria-labelledby": "selectButton",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <MenuItem
          onClick={() => handleSelection("ar")}
          disableRipple
          disabled={i18n.language === "ar"}
          selected={i18n.language === "ar"}
          className="!py-4 !font-SSTArabic"
        >
          {t("العربيه")}
        </MenuItem>
        <MenuItem
          onClick={() => handleSelection("en")}
          disableRipple
          disabled={i18n.language === "en"}
          selected={i18n.language === "en"}
          className="!py-4 !font-SSTArabic"
        >
          {t("الانجليزيه")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default SelectLang;

{
  /* <button
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
            key={lng}
          >
            {lngs[lng].name}
          </button> */
}
