import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CustomButton, CustomHeader } from "../Components";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useTranslation } from "react-i18next";

const OurProjects = ({ data, header }) => {
  const { t } = useTranslation();
  const newData = data.map((obj, index) => ({
    ...obj,
    order: index + 1,
  }));
  return (
    <section id="projects" className="section_padding">
      <div className="custom-container flex flex-col gap-4">
        <CustomHeader header={header} />
        <div className="slider_Container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            initialSlide={0}
            loop={true}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {newData
              .sort((a, b) => a.order - b.order)
              ?.map((ele, i) => (
                <SwiperSlide key={i + 1}>
                  <figure className="flex max-lg:items-center w-[85%] mx-auto">
                    <div className="py-6 lg:py-8 px-4 sm:px-8 lg:ps-6 lg:pe-20 bg-violetColor/10 rounded-3xl flex flex-col gap-6 sm:gap-10 lg:gap-10 w-full lg:w-[70%] lg:self-end">
                      <h6 className="text-violetColor text-2xl-3xl font-medium">
                        {ele?.title}
                      </h6>
                      <p className="max-sm:text-xs text-sm md:text-base font-medium">
                        {ele?.description}
                      </p>
                      <div className="flex justify-center max-sm:flex-col max-sm:gap-3 gap-6 md:gap-10 xl:mt-4">
                        <div className="flex_center flex-col gap-2 md:gap-4 text-sm-base rounded-xl py-2 md:py-4 px-2 lg:px-8 bg-violetColor/20 text-center">
                          <p className="sm:whitespace-nowrap">
                            {t("التقنيات")}
                          </p>
                          <p className="font-bold">{ele?.technologies}</p>
                        </div>
                        <div className="flex_center flex-col gap-2 md:gap-4 text-sm-base rounded-xl py-2 md:py-4 px-2 lg:px-8 bg-violetColor/20 text-center">
                          <p className="sm:whitespace-nowrap">{t("المنصات")}</p>
                          <p className="font-bold">{ele?.platform}</p>
                        </div>
                      </div>
                      <CustomButton
                        title={t("تفاصيل المشروع")}
                        color="text-violetColor"
                        bgColor="bg-violetColor"
                        borderColor="border-violetColor"
                        hoverBgColor="hover:bg-violetColor"
                        hoverContainedBgColor="hover:bg-violetColor/80"
                        className="max-sm:w-full px-4 md:px-6 xl:mt-4"
                        arrow
                        url={`/portfolio/${ele?.slug}`}
                      />
                    </div>
                    <div className="max-lg:hidden">
                      <img
                        src={ele?.image}
                        alt={ele?.title}
                        className="max-sm:w-[200px] max-sm:h-[280px] w-[400px] h-[380px] lg:h-[570px] lg:w-[484px]"
                      />
                    </div>
                  </figure>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
