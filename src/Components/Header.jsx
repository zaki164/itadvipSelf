import { FiPhoneCall } from "react-icons/fi";

const Header = ({ number, socialLinks }) => {
  return (
    <header className="py-3 md:py-5 bg-grayColor text-black">
      <div className="custom-container flex_between">
        <a
          href={`tel:${number}`}
          className="flex gap-3 md:gap-4 text-base-l font-bold"
          rel="noreferrer"
          aria-label="number"
          dir="rtl"
        >
          <span>{number}+</span>
          <span className="flex_center text-l-xl">
            <FiPhoneCall />
          </span>
        </a>
        <div className="flex gap-2 md:gap-4">
          {socialLinks?.map((ele, i) => (
            <a
              href={ele?.link}
              key={i}
              className="w-3 h-3 md:w-5 md:h-4 rounded"
            >
              <img src={ele?.dark_image} alt={ele?.name} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
