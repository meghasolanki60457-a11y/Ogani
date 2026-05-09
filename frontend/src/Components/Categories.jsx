import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function App() {

  const categories = [
    {
      image: "/Images/one.png",
      title: "Fresh Fruit"
    },
    {
      image: "/Images/one.png",
      title: "Vegetables"
    },
    {
      image: "/Images/one.png",
      title: "Drink Fruits"
    },
    {
      image: "/Images/one.png",
      title: "Fresh Meat"
    },
    {
      image: "/Images/one.png",
      title: "Butter & Eggs"
    },
  ];

  return (
    <section className="categories">
      <div className="container">

        <Swiper
          spaceBetween={25}
          slidesPerView={4}
          loop={true}

          // ✅ AUTO SLIDE FIX
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          navigation={true}
          modules={[Navigation, Autoplay]}

          // ✅ IMPORTANT FIX (Swiper init bug fix)
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.autoplay?.start();
            }, 200);
          }}
        >

          {
            categories.map((item, index) => (
              <SwiperSlide key={index}>

                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px"
                  }}
                >
                  <h5>
                    <a href="javascript:void(0)">
                      {item.title}
                    </a>
                  </h5>
                </div>

              </SwiperSlide>
            ))
          }

        </Swiper>

      </div>
    </section>
  );
}

export default App;