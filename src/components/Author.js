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
          Linked In
        </a>
        <a
          href={props.github}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold"}>
          Github
        </a>
        <a
          href={props.gitlab}
          target={"_blank"}
          rel={"noreferrer"}
          className={"self-start font-bold"}>
          Gitlab
        </a>
      </div>
    </>
  );
};

export default Author;
