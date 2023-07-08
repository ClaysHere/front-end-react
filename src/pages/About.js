import React from "react";
import Carousel from "../components/Carousel";
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

const About = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gradient-to-b from-teal-200 via-slate-400 to-slate-100">
      <div className="pt-20 px-8 lg:px-20 flex flex-col items-center pb-16">
        <h1 className="py-6 lg:py-16 text-xl lg:text-4xl font-bold">
          "Why This Website Was Created"
        </h1>
        <div className="flex flex-col gap-4 text-justify lg:grid lg:grid-cols-2 lg:gap-x-16 lg:text-lg font-semibold text-slate-600/95">
          <p>
            Website ini dibuat dengan tujuan untuk memberikan informasi lengkap
            dan bermanfaat tentang buah-buahan kepada pengunjung. Kami ingin
            menjadi sumber pengetahuan yang terpercaya tentang berbagai jenis
            buah, manfaat kesehatan yang mereka miliki, cara memilih dan
            menyimpan buah yang tepat, serta berbagai resep dan ide kreatif
            dalam memanfaatkan buah-buahan.
          </p>
          <p>
            Kami berkomitmen untuk menginspirasi dan memotivasi pengunjung kami
            untuk menjadikan buah sebagai bagian penting dari gaya hidup sehat
            mereka. Kami ingin membantu meningkatkan kesadaran akan pentingnya
            konsumsi buah secara teratur dan mengajak semua orang untuk
            menjelajahi kelezatan serta keunikan yang ditawarkan oleh berbagai
            jenis buah-buahan.
          </p>
          <p>
            Selain itu, kami juga ingin menciptakan komunitas yang berkumpul di
            sekitar kecintaan terhadap buah. Kami ingin memberikan platform bagi
            para pecinta buah untuk berbagi pengalaman, resep favorit, dan tips
            seputar buah-buahan. Kami percaya bahwa dengan saling berbagi
            pengetahuan dan inspirasi, kita dapat saling mendukung dalam
            perjalanan menuju gaya hidup yang lebih sehat dan lebih
            berkelanjutan.
          </p>
          <p>
            Kami berharap bahwa melalui website ini, pengunjung dapat menemukan
            jawaban atas pertanyaan mereka tentang buah-buahan, menemukan
            inspirasi dalam menciptakan hidangan yang lezat dan sehat, serta
            mendapatkan motivasi untuk menjadikan buah sebagai bagian penting
            dalam pola makan sehari-hari. Kami ingin menjadi mitra dalam
            perjalanan kesehatan dan kelezatan Anda dengan menyediakan informasi
            yang akurat, terpercaya, dan mudah diakses tentang dunia
            buah-buahan.
          </p>
          <p>
            Terima kasih telah bergabung dengan kami dalam petualangan mengenal
            dan mencintai buah-buahan. Kami berharap Anda menikmati kunjungan
            Anda di website kami dan mendapatkan manfaat yang berlimpah dari
            konten yang kami sajikan.
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
