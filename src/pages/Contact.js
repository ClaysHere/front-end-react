import Form from "../components/Form";
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
const Contact = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div
      data-aos="fade-up"
      className="flex sm:flex-col lg:flex-row pt-20 bg-slate-300">
      <div className=" lg:flex-1 items-center w-full flex flex-col py-20 lg:py-36 gap-y-20">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <Form />
      </div>
      <div className={` lg:flex-1 bg-[url('../src/img/contact.jpg')] bg-cover`}>
        {/* <img src={Background} alt="Orange" /> */}
        <div className="w-full h-full bg-slate-800 bg-opacity-50"></div>
      </div>
    </div>
  );
};
export default Contact;
