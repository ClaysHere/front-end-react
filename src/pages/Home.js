import Pictures from "../components/Pictures";
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
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Home = (props) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className={`${props.pad} px-2 pb-1 pt-16 md:pt-24 lg:pt-28 font-inter grid grid-cols-2 gap-4 md:grid-cols-4 md:px-4`}>
        <div
          className={`${props.visibility} col-start-2 row-start-1 flex items-end text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]  `}>
          <span>Know you Fruits!</span>
        </div>
        <div
          className={`${props.visibility} col-start-1 row-start-1 text-lg text-slate-600 md:col-start-4 md:row-start-2 flex flex-col aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] font-bold`}>
          <span>It's FruitPedia!</span>
        </div>
        <Pictures />
      </div>
    </>
  );
};

export default Home;
