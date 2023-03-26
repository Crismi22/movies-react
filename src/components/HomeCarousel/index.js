import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./style.css";

function HomeCarousel() {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        autoplay: true,
        rewind: true,
        height: "425px",
        gap: "1rem",
      }}
    >
      <SplideSlide>
        <div className="slide">
          <img
            src="https://superpet.pe/blog/wp-content/uploads/2021/07/Gatitos-bebe%CC%81s-Co%CC%81mo-cuidar-de-ellos-.jpg"
            alt="1"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            alt="2"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide">
          <img
            src="https://www.mascotaclubperu.com/wp-content/uploads/2019/05/shutterstock_270581891.jpg"
            alt="3"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slide">
          <img
            src="https://images.ecestaticos.com/N_vWPjAR7b-erAJJOcXtt1x5CaU=/0x183:2539x1614/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F782%2Fa64%2F421%2F782a64421b6a68a54f77c217e8837890.jpg"
            alt="4"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default HomeCarousel;
