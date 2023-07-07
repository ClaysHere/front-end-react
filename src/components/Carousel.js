import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import pro1 from "../img/carousel1.jpg";
import pro2 from "../img/carousel2.jpg";
import pro3 from "../img/carousel3.jpg";
import pro4 from "../img/carousel4.jpg";

const Carousel = () => {
  const items = [
    {
      id: "01",
      image: pro1,
      text1: "Manfaat Buah",
      text2: (
        <>
          <p>
            Buah-buahan sangat bermanfaat bagi kesehatan kita. Mereka merupakan
            sumber alami serat, vitamin, mineral, dan antioksidan yang penting
            bagi tubuh. Konsumsi buah-buahan secara teratur dapat membantu
            menjaga pencernaan yang sehat, mengurangi risiko penyakit kronis
            seperti kanker dan penyakit jantung, serta meningkatkan sistem
            kekebalan tubuh.
          </p>
          <p>
            Selain itu, buah-buahan juga memberikan energi alami yang dibutuhkan
            oleh tubuh kita. Mereka rendah kalori, sehingga sangat baik dalam
            menjaga berat badan yang sehat dan mendukung program penurunan berat
            badan. Buah-buahan juga mengandung senyawa antiinflamasi alami yang
            dapat membantu mengurangi peradangan dalam tubuh
          </p>
          <p>
            Berbagai jenis buah memiliki manfaat khusus. Beberapa buah seperti
            jeruk, apel, dan pisang kaya akan potassium yang baik untuk
            kesehatan jantung dan menjaga tekanan darah normal. Sementara itu,
            buah-buahan berwarna cerah seperti berry, kiwi, dan mangga
            mengandung banyak nutrisi dan antioksidan yang membantu menjaga
            kecantikan kulit.
          </p>
          <p>
            Tidak hanya itu, buah-buahan juga memberikan lemak sehat yang
            diperlukan oleh tubuh kita. Contohnya, alpukat dan kelapa mengandung
            lemak sehat yang baik untuk fungsi otak dan penyerapan vitamin.
          </p>
          <p>
            Dengan mengonsumsi berbagai jenis buah-buahan, kita mendapatkan
            berbagai nutrisi yang penting untuk tubuh kita. Kombinasikan
            berbagai buah dalam pola makan seimbang, dan rasakan manfaatnya bagi
            kesehatan secara keseluruhan. Jagalah kebiasaan makan buah-buahan
            yang sehat dan nikmati manfaatnya untuk hidup yang lebih baik.
          </p>
        </>
      ),
      background: "bg-teal-400",
      text: "text-slate-800",
      col: "text-slate-600",
    },
    {
      id: "02",
      image: pro2,
      text1: "Buah Eksotis",
      text2: (
        <>
          <p>
            Buah eksotis merupakan anugerah alam yang memikat dengan keunikan
            dan kelezatannya. Mereka menghadirkan pengalaman baru dalam dunia
            kuliner, menggoda lidah dengan rasa yang eksotis dan aroma yang
            memikat.
          </p>
          <p>
            Setiap buah eksotis memiliki karakteristik yang unik. Misalnya,
            durian, "raja dari semua buah", dengan dagingnya yang lembut dan
            aroma kuat yang menggugah selera. Atau manggis, buah dengan kulit
            unik yang menutupi daging putih yang lembut, manis, dan segar.
          </p>
          <p>
            Tak kalah menariknya adalah buah naga, dengan kulitnya yang berduri
            dan daging yang renyah dan segar, memberikan kombinasi rasa manis
            dan sedikit asam yang menarik. Ada juga rambutan, dengan bulu-bulu
            lembut yang melindungi dagingnya yang manis dan juicy.
          </p>
          <p>
            Buah eksotis seperti kiwano atau buah ceri Afrika, dengan kulit
            berduri dan daging berair yang memberikan rasa segar dan sedikit
            asam. Atau markisa, buah yang eksotis dengan daging yang manis dan
            asam, memberikan cita rasa yang unik dan menarik.
          </p>
          <p>
            Buah eksotis seringkali juga dikenal dengan kandungan nutrisinya
            yang kaya. Mereka mengandung vitamin, mineral, dan antioksidan yang
            penting untuk kesehatan kita. Selain memberikan kenikmatan pada
            lidah, buah eksotis juga memberikan manfaat yang luar biasa bagi
            kesehatan tubuh.
          </p>
          <p>
            Jadi, mari kita menjelajahi dunia buah eksotis dan memperkaya
            pengalaman kuliner kita. Cobalah mencicipi buah-buahan yang belum
            pernah kita coba sebelumnya, dan biarkan kelezatannya memanjakan
            lidah kita. Buah eksotis adalah perjalanan rasa yang menarik dan
            memberikan keunikan yang tak terlupakan.
          </p>
        </>
      ),
      background: "bg-slate-600",
      text: "text-teal-400",
      col: "text-slate-300",
    },
    {
      id: "03",
      image: pro3,
      text1: "Fun Fact",
      text2: (
        <>
          <p>
            Buah-buahan menyimpan fakta menarik yang mungkin belum Anda ketahui.
            Pepaya, misalnya, memiliki enzim papain yang membantu memecah
            protein dalam makanan. Pisang, meskipun bentuknya berbeda,
            sebenarnya termasuk dalam keluarga buah beri. Jeruk bali merupakan
            satu-satunya jenis jeruk yang diperbanyak secara vegetatif. Semangka
            mengandung sekitar 92% air dan membantu menjaga tubuh tetap
            terhidrasi. Tomat sebenarnya adalah buah, bukan sayuran, karena
            mengandung biji dan tumbuh dari bunga yang dibuahi. Ada banyak lagi
            fakta menarik tentang buah-buahan yang memperkaya pengetahuan dan
            pengalaman kita dalam menjelajahi dunia kuliner.
          </p>
          <p>
            Selain memiliki rasa yang lezat, buah-buahan juga memberikan manfaat
            yang penting bagi kesehatan kita. Buah mengandung serat, vitamin,
            mineral, dan antioksidan yang mendukung kesehatan tubuh. Serat dalam
            buah membantu menjaga pencernaan yang sehat. Antioksidan melindungi
            tubuh dari radikal bebas dan risiko penyakit kronis. Vitamin dan
            mineral dalam buah menjaga sistem kekebalan tubuh tetap kuat.
            Konsumsi buah secara teratur adalah langkah penting dalam menjaga
            kesehatan secara keseluruhan.
          </p>
          <p>
            Bukan hanya memberikan manfaat kesehatan, buah-buahan juga
            menghadirkan sensasi segar dan kelezatan yang tak terlupakan.
            Buah-buahan seperti jeruk, apel, mangga, dan stroberi memberikan
            kombinasi rasa yang unik dan menyenangkan. Setiap gigitan buah
            adalah pengalaman yang memanjakan lidah. Dalam keberagaman varietas
            dan rasa, kita dapat menikmati kelezatan alami yang ditawarkan oleh
            buah-buahan.
          </p>
        </>
      ),
      background: "bg-teal-400",
      text: "text-slate-800",
      col: "text-slate-600",
    },
    {
      id: "04",
      image: pro4,
      text1: "Ayo Makan Buah",
      text2: (
        <>
          <p>
            Ayo, mari kita jadikan makan buah sebagai kebiasaan sehari-hari!
            Buah-buahan adalah anugerah alam yang kaya akan manfaat kesehatan.
            Makan buah bukan hanya mengenyangkan, tetapi juga memberikan nutrisi
            penting yang tubuh kita butuhkan. Rasakan sensasi segarnya
            buah-buahan alami yang melebur di lidah, memberikan kelembutan dan
            kelezatan yang tiada tara.
          </p>
          <p>
            Mari kita jelajahi keanekaragaman buah-buahan yang ada di sekitar
            kita. Nikmati keasaman segar jeruk, kelembutan pisang, kelezatan
            manisnya mangga, dan kecrispy-an apel yang memikat. Setiap gigitan
            buah adalah kebaikan yang kita berikan kepada diri sendiri.
          </p>
          <p>
            Buah-buahan memberikan energi alami yang membuat kita merasa segar
            dan bugar sepanjang hari. Mereka juga mengandung serat yang membantu
            menjaga pencernaan yang sehat. Tidak hanya itu, buah-buahan
            mengandung antioksidan yang melindungi tubuh dari radikal bebas dan
            menjaga kesehatan jantung serta sistem kekebalan tubuh.
          </p>
          <p>
            Jadi, mari kita hidup sehat dengan memasukkan buah-buahan dalam pola
            makan sehari-hari. Sajikan mangkuk berisi berbagai potongan buah
            sebagai camilan sehat atau tambahkan potongan buah dalam salad segar
            yang mengeksplorasi rasa dan tekstur yang beragam.
          </p>
          <p>
            Mulailah petualangan kuliner dengan buah-buahan dan jadikan makan
            buah sebagai kebiasaan yang menyenangkan. Dengan memakan buah, kita
            memberikan perhatian dan cinta pada diri kita sendiri serta
            investasi terbaik bagi kesehatan jangka panjang kita. Bersama-sama,
            mari kita jelajahi dan nikmati keajaiban buah-buahan!
          </p>
        </>
      ),
      background: "bg-slate-600",
      text: "text-teal-400",
      col: "text-slate-300",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      speed: 500,
      spaceBetween: 0,
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const handlePaginationClick = (index) => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.slideTo(index);
  };

  const allitems = items.map((item) => {
    return (
      <div
        key={item.id}
        className={`swiper-slide px-8 py-16 md:py-8 lg:px-20 lg:py-16 flex rounded-3xl items-center ${item.background} h-full`}>
        <div
          className={
            "flex flex-col-reverse xl:flex-row md:items-center lg:items-start gap-x-20"
          }>
          <div className={"flex-1"}>
            <p className={`swiper-bold text-2xl font-bold ${item.text}`}>
              {item.text1}
            </p>
            <div
              className={`swiper-thin mt-8 font-semibold ${item.col} flex flex-col gap-4 text-sm text-justify`}>
              {item.text2}
            </div>
          </div>
          <div className={"flex-1 rounded-lg overflow-hidden mb-4"}>
            <img
              className="object-cover object-center"
              src={item.image}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="swiper h-full w-full">
        <div className="swiper-wrapper h-full w-full">{allitems}</div>
        <div className="swiper-pagination">
          {/* Menampilkan swiper-pagination dengan titik-titik */}
          {[1, 2, 3, 4].map((index) => (
            <span
              key={index}
              onClick={() => handlePaginationClick(index - 1)}
              className="swiper-pagination-bullet"></span>
          ))}
        </div>
        <div className="swiper-scrollbar hidden"></div>
      </div>
    </>
  );
};

export default Carousel;
