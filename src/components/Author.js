const Author = (props) => {
  return (
    <>
      <div className={`${props.visibility} ${props.styles}`}>
        <span className={"self-start mb-4 font-bold text-xl"}>
          {props.nama}
        </span>
        <a
          href={props.instagram}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold "}>
          Instagram
        </a>
        <a
          href={props.linkedin}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold"}>
          LinkedIn
        </a>
        <a
          href={props.github}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold"}>
          Github
        </a>
      </div>
    </>
  );
};

export default Author;
