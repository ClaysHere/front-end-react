import Pictures from "../components/Pictures";
// import records from "../database/records.json";

const Home = (props) => {
  return (
    <div
      className={
        "mt64 p-2 font-inter grid grid-cols-2 gap-4 md:grid-cols-4 md:p-4"
      }>
      <div
        className={`${props.visibility} text-lg text-slate-600 md:col-start-4 md:row-start-2 flex flex-col aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]`}>
        <span className={"self-start mb-4"}>{props.text2}</span>
        <a
          href={"https://www.instagram.com/mhd.fikri4402/"}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold "}>
          {props.text3}
        </a>
        <a
          href={"https://gitlab.com/muhammadfikri4402"}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold"}>
          {props.text4}
        </a>
        <a
          href={"https://github.com/ClaysHere"}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold"}>
          {props.text5}
        </a>
      </div>
      <div
        className={`${props.visibility} flex items-end text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3]`}>
        <span>{props.text1}</span>
      </div>
      <Pictures />
    </div>
  );
};

export default Home;
