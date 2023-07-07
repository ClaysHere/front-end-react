import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer
        className={
          "bg-slate-800 pt-16 text-white pb-4 flex flex-col items-center w-full"
        }>
        <div
          className={
            "flex flex-wrap gap-y-8 px-8 lg:px-16 justify-between w-full"
          }>
          <div className={"w-full md:w-1/2 lg:w-1/3 lg:p-8"}>
            <h1 className={"text-3xl font-bold mb-4"}>FruitPedia</h1>
            <h2 className={"text-xl font-bold text-slate-400 mb-4"}>
              Contact Us!
            </h2>
            <p className={"text-slate-400"}>contactus@fruitpedia.com</p>
            <p className={"text-slate-400 text-sm"}>Jl. Thamrin No. 2IF</p>
            <p className={"text-slate-400"}>Medan</p>
          </div>
          <div className={"w-full md:w-1/2 lg:w-1/3 lg:p-8"}>
            <h2 className={"mb-4 text-xl font-semibold"}>About Fruits</h2>
            <p className={"text-slate-400 mb-3 cursor-pointer"}>Manfaat</p>
            <p className={"text-slate-400 mb-3 cursor-pointer"}>Pelestarian</p>
            <p className={"text-slate-400 mb-3 cursor-pointer block"}>
              Fun Fact
            </p>
          </div>
          <div className={"w-full md:w-1/2 lg:w-1/3 lg:p-8"}>
            <h2 className={"mb-4 text-xl font-semibold"}>Links</h2>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                className={"hover:text-teal-300"}
                onClick={() => {
                  navigate("/");
                }}>
                Home
              </span>
            </p>

            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                onClick={() => {
                  navigate("/creator");
                }}
                className={"hover:text-teal-300"}>
                Creator
              </span>
            </p>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                onClick={() => {
                  navigate("/about");
                }}
                className={"hover:text-teal-300"}>
                About
              </span>
            </p>
            <p className={"text-slate-400 mb-2 cursor-pointer"}>
              <span
                onClick={() => {
                  navigate("/contact");
                }}
                className={"hover:text-teal-300"}>
                Contact
              </span>
            </p>
          </div>
        </div>
        <hr className={"w-[90%] mt-8 mb-4 bg-slate-400 lg:w-[95%]"} />
        <p className={"px-8 py-4 text-slate-400 text-sm mt-4"}>
          Copyright |{" "}
          <span className={"text-teal-300"}>&copy; FruitPedia.</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
