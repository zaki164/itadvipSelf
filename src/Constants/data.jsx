import {
  AiFillContacts,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
} from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";

const navLinks = [
  {
    title: "الرئيسية",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    title: "من نحن",
    link: "/about-us",
    icon: <AiFillInfoCircle />,
  },
  {
    title: "خدماتنا",
    link: "/#services",
    icon: <MdMiscellaneousServices />,
  },
  {
    title: "أعمالنا",
    link: "/#projects",
    icon: <AiFillProject />,
  },
  {
    title: "تواصل معنا",
    link: "/contact-us",
    icon: <AiFillContacts />,
  },
];

const footerLinks = [
  {
    title: "الرئيسية",
    link: "/",
  },
  {
    title: "خدماتنا",
    link: "/#services",
  },
  {
    title: "أعمالنا",
    link: "/#projects",
  },
  {
    title: "طلب خدمة",
    link: "/contact-us",
    service: true,
  },
];

//   {
//     name: "Amr Darwish",
//     position: "Senior Flutter Develpoer",
//     img: images?.amr,
//   },
//   {
//     name: "Amr Darwish",
//     position: "Senior Flutter Develpoer",
//     img: images?.amr,
//   },
//   {
//     name: "Amr Darwish",
//     position: "Senior Flutter Develpoer",
//     img: images?.amr,
//   },
//   {
//     name: "Amr Darwish",
//     position: "Senior Flutter Develpoer",
//     img: images?.amr,
//   },
//   {
//     name: "Amr Darwish",
//     position: "Senior Flutter Develpoer",
//     img: images?.amr,
//   },
// ];

const data = {
  navLinks,
  footerLinks,
};

export default data;
