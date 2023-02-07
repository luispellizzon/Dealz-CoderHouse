import Item from "./Item";

// const ItemsList =({productCategory})=>{
//     return (
//         /*List for Each Category*/
//         <div className="mt-2 mb-5 border-2 border-black">
//             {/*Each Title From Each Category*/}
//             <div className="font-bold">
//                 <h1>{productCategory.title}</h1>
//             </div>

//             {/*Each Item From Each Category*/}
//             {productCategory.items.map((product)=>(
//                 <Item key={product.id} item={product}/>
//             ))}
//         </div>
        
//     )
// }

// export default ItemsList;

import SwiperCore, { Navigation, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// SwiperCore.use([Mousewheel]);

const ItemsList = ({ productCategory, addOnCart }) => {
  const { title, items } = productCategory;

  return (
    <div className="mt-10 mb-5">
      <h1 className="text-align text-3xl font-bold px-4">{title}</h1>
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
        {items.map((item) => (
          <SwiperSlide key={item.id}  className="flex items-center justify-center px-2 h-full">
            <Item item={item} addOnCart={addOnCart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemsList;