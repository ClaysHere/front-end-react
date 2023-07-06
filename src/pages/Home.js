import Author from "../components/Author";
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
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Home = (props) => {
  const authors = [
    {
      nama: "M. Fikri",
      github: "https://github.com/ClaysHere",
      instagram: "https://www.instagram.com/mhd.fikri4402/",
      linkedin: "https://www.linkedin.com/in/m-fikri-19bb99241/",
      styles:
        "col-start-1 row-start-2 text-lg text-slate-600 md:col-start-2 md:row-start-1 flex flex-col aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]",
    },
    {
      nama: "Naomi Prisella",
      github: "https://github.com/naomehmi",
      instagram: "https://www.instagram.com/naoella_/",
      linkedin: "https://www.linkedin.com/in/naomi-prisella-91879b256/",
      styles:
        "col-start-2 row-start-3 text-lg text-slate-600 md:col-start-4 md:row-start-2 flex flex-col aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]",
    },
    {
      nama: "Angelica Thomas",
      github: "https://github.com/angelicaa11",
      instagram: "https://www.instagram.com/angelicathomas_/",
      linkedin: "https://www.linkedin.com/in/angelica-thomas-4761a6253/",
      styles:
        "col-start-1 row-start-4 text-lg text-slate-600 md:col-start-1 md:row-start-3 flex flex-col aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]",
    },
  ];

  const allAuthor = authors.map((author) => {
    return (
      <Author
        nama={author.nama}
        text1="Instagram"
        text2="LinkedIn"
        text3="Github"
        text4="Gitlab"
        github={author.github}
        gitlab={author.gitlab}
        instagram={author.instagram}
        linkedin={author.linkedin}
        styles={author.styles}
        visibility={props.visibility}
      />
    );
  });
  return (
    <>
      <div
        className={`${props.pad} px-2 pb-1 pt-16 md:pt-24 lg:pt-28 font-inter grid grid-cols-2 gap-4 md:grid-cols-4 md:px-4`}>
        {allAuthor}
        <div
          className={`${props.visibility} flex items-end text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] col-start-2 row-start-7 `}>
          <span>Know you Fruits!</span>
        </div>
        <Pictures />
      </div>
    </>
  );
};

export default Home;
