import { useTranslation } from "react-i18next";
import {
  Header,
  Navbar,
  Footer,
  Copyright,
  // ScrollToHashElement,
  Loader,
  WhatsApp,
} from "../Components";
import { useGetSettingsDataQuery } from "../store/SettingsApi";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const { data, isFetching, isError, error, refetch } =
    useGetSettingsDataQuery();

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  return isFetching ? (
    <Loader />
  ) : isError ? (
    <h1>{error?.data?.message}</h1>
  ) : (
    <>
      <div className="fixed w-full top-0 z-50">
        <Header
          number={data?.data?.settings?.phone}
          socialLinks={data?.data?.social_links}
        />
        {/* <ScrollToHashElement /> */}
        <Navbar />
      </div>
      <div className="pt-[110px] sm:pt-[120px] md:pt-[158px] lg:pt-[170px]">
        {children}
      </div>
      <WhatsApp number={data?.data?.settings?.phone} />
      <Footer footerData={data?.data} />
      <Copyright />
    </>
  );
};

export default Layout;
