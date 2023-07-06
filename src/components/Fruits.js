import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Home from "../pages/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Fruits = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div data-aos="fade-up" className={`${props.bg} h-full pb-8`}>
        <div
          className={`mb-24 pb-4 pt-28 mx-8 grid grid-cols-1 md:grid-cols-2 gap-x-8`}>
          <p className={"col-start-1 text-base font-semibold"}>{props.id}</p>
          <p className={"font-bold text-4xl md:col-start-1"}>{props.nama}</p>
          <img
            className={
              "w-full mt-4 rounded-lg md:row-span-2 lg:row-start-3 lg:col-start-1 lg:row-span-3"
            }
            src={props.img}
            alt={"gambar"}
          />
          <div className={"mt-4 lg:col-start-2 lg:row-start-3 md:text-xl"}>
            <h1 className="text-xl font-bold mb-4 mt-8">Description</h1>
            <p className="text-sm font-semibold">{props.desc}</p>
          </div>
          <div className={"mt-4 lg:col-start-2 lg:row-start-4 md:text-xl"}>
            <h1 className="text-xl font-bold mb-4 mt-8">Origin</h1>
            <p className="text-sm font-semibold">{props.origin}</p>
          </div>
          <div className={"mt-4 lg:col-start-2 lg:row-start-5 md:text-xl"}>
            <h1 className="text-xl font-bold mb-4 mt-8">Variety</h1>
            <p className="text-sm font-semibold">{props.variety}</p>
          </div>
          <HiOutlineArrowNarrowLeft
            onClick={handleClick}
            className={`bg-white animate-pulse hover:animate-none bg-opacity-50 backdrop-blur-sm text-black p-2 hover:scale-110 fixed bottom-4 rounded-full w-16 h-16 border-2 border-black md:bg-opacity-100 md:mt-16 lg:row-start-6 z-[9999] md:bg-white`}
          />
        </div>
        <div className={`${props.bg} hidden md:grid 2xl:grid-cols-2`}>
          <Home visibility="invisible" disp="md:hidden" pad="" />
        </div>
      </div>
    </>
  );
};

export default Fruits;
