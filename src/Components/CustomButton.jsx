import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

const CustomButton = ({
  url = "#",
  title,
  contained,
  className,
  setAnchorNav,
  arrow,
  service,
  color = "text-mainColor",
  bgColor = "bg-mainColor",
  borderColor = "border-mainColor",
  hoverBgColor = "hover:bg-mainColor",
  hoverContainedBgColor = "hover:bg-mainColor/80",
}) => {
  return (
    <Link
      to={url}
      state={{ from: service ? "service" : "public" }}
      onClick={() => (setAnchorNav ? setAnchorNav(null) : false)}
      className={`px-8 md:px-10 py-2 md:py-3 ${className ? className : ""} ${
        contained
          ? `${bgColor} text-white ${hoverContainedBgColor}`
          : `border ${borderColor} ${color} ${hoverBgColor} hover:text-white`
      } rounded-lg font-medium text-sm-base transition duration-300 whitespace-nowrap ${
        arrow ? "flex_center gap-2 md:gap-4 w-fit" : ""
      }`}
    >
      {title}
      {arrow && <BsArrowLeftShort className={`text-xl-2xl ltr:rotate-180`} />}
    </Link>
  );
};

export default CustomButton;
