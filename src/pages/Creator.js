import AOS from "aos";
import "aos/dist/aos.css";
import Boxes from "../components/Boxes";

const Creator = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  AOS.init({
    duration: 1200,
  });
  const authors = [
    {
      nama: "M. Fikri",
      github: "https://github.com/ClaysHere",
      instagram: "https://www.instagram.com/mhd.fikri4402/",
      linkedin: "https://www.linkedin.com/in/m-fikri-19bb99241/",
      align: "col-start-1 row-start-1",
      dataAOS: "fade-right",
    },
    {
      nama: "Naomi Prisella",
      github: "https://github.com/naomehmi",
      instagram: "https://www.instagram.com/naoella_/",
      linkedin: "https://www.linkedin.com/in/naomi-prisella-91879b256/",
      align: "md:col-start-2 lg:col-start-3 row-start-2 md:text-end",
      dataAOS: "fade-left",
    },
    {
      nama: "Angelica Thomas",
      github: "https://github.com/angelicaa11",
      instagram: "https://www.instagram.com/angelicathomas_/",
      linkedin: "https://www.linkedin.com/in/angelica-thomas-4761a6253/",
      align: "col-start-1 row-start-3",
      dataAOS: "fade-right",
    },
  ];

  const allAuthor = authors.map((author) => {
    return (
      <Boxes
        align={author.align}
        nama={author.nama}
        text1="Instagram"
        text2="LinkedIn"
        text3="Github"
        text4="Gitlab"
        github={author.github}
        instagram={author.instagram}
        linkedin={author.linkedin}
        dataAOS={author.dataAOS}
      />
    );
  });
  return (
    <div className="team bg-slate-200">
      <div className="header">
        <div className="overlay">
          <h1 className="text-4xl font-bold text-slate-100">
            The Team Behind FruitPedia
          </h1>
        </div>
      </div>
      <p data-aos="fade-up">
        Hello there, we are <b>Codephile</b>, a small team of 3 enthusiastic
        first-year computer science students from Mikroskil University,
        Indonesia. We created this website for a group project, our goal is to
        spread information about fruits. Codephile consists of M. Fikri, Naomi
        Prisella, and Angelica Thomas. Get to know them on their socials down
        below!
      </p>
      <div className="grid px-4 lg:grid-cols-3 md:grid-cols-2 md:px-8 lg:px-36">
        {allAuthor}
      </div>
    </div>
  );
};

export default Creator;
