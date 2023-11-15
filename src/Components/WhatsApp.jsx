import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsApp = ({ number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsVisible(isScrollingUp || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <button
      onClick={() =>
        window.open(
          `https://api.whatsapp.com/send?phone=${number}&text=Hi`,
          "_blank"
        )
      }
      className={`fixed flex_center bottom-10 right-10 text-3xl-4xl bg-green-500 text-white p-4 rounded-full shadow-xl z-50  duration-300 ${
        isVisible ? "scale-100" : "scale-0"
      }`}
    >
      <BsWhatsapp />
    </button>
  );
};

export default WhatsApp;
