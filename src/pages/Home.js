import Author from "../components/Author";
import Pictures from "../components/Pictures";

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
    <div
      className={
        "mt64 p-2 font-inter grid grid-cols-2 gap-4 md:grid-cols-4 md:p-4"
      }>
      {allAuthor}
      <div
        className={`${props.visibility} flex items-end text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] col-start-2 row-start-7 `}>
        <span>Know you Fruits!</span>
      </div>
      <Pictures />
    </div>
  );
};

export default Home;
