import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <div className="flex_center py-3 md:py-4 text-mainColor font-medium max-sm:text-sm">
      {t("حقوق النشر")}
    </div>
  );
};

export default Copyright;
