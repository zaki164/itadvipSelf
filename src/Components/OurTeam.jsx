import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useTranslation } from "react-i18next";

const OurTeam = ({ data }) => {
  const { t } = useTranslation();
  const newData = data.map((obj, index) => ({
    ...obj,
    order: index + 1,
  }));
  return (
    <section className="section_padding">
      <div className="custom-container flex flex-col gap-4 text-center">
        <h5 className="text-2xl-3xl font-bold">{t("فريقنا")}</h5>
        <h3 className="text-[#9B9B9B] text-base-l font-medium">
          {t("فريق متحمس")}
        </h3>
        <div className="slider_Container">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            slidesPerGroup={1}
            initialSlide={0}
            loop={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {newData
              .sort((a, b) => a.order - b.order)
              ?.map((ele, i) => (
                <SwiperSlide key={i}>
                  <figure className="flex flex-col items-center custom_shadow gap-7 md:gap-4 py-4 md:py-6 rounded-2xl mt-6 mx-5">
                    <img
                      src={ele?.image}
                      alt={ele?.name}
                      className="w-24 h-24 md:w-44 md:h-44 rounded-full"
                    />
                    <p className="text-base-lg font-bold">{ele.name}</p>
                    <p className="text-[#9B9B9B] text-sm-base font-medium">
                      {ele?.position}
                    </p>
                  </figure>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
