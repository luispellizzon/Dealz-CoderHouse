import Item from "./Item";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ItemsList = ({
  productTitle,
  productItems = [],
  isModalOpen,
  getCurrent,
}) => {
  return (
    <div className="mt-10 mb-5">
      <h1 className="text-align text-3xl font-bold px-4 uppercase">
        {productTitle}
      </h1>
      <hr className="mb-4" />
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        direction="horizontal"
        navigation
        breakpoints={{
          // when window width is >= 320px
          200: {
            slidesPerView: 2.2,
            spaceBetween: 0,
          },

          420: {
            slidesPerView: 2.19,
            spaceBetween: 1,
          },
          540: {
            slidesPerView: 2.19,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3.19,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 5.19,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 6.19,
            spaceBetween: 0,
          },
        }}
        className="pb-8"
      >
        {productItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex items-center justify-center px-2 h-full"
          >
            <Item
              item={item}
              isModalOpen={isModalOpen}
              getCurrent={getCurrent}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemsList;
