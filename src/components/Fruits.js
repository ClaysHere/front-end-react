import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Home from "../pages/Home";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Fruits = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.4 }}>
      <div className={`${props.bg}`}>
        <div
          className={`mb-24 pb-4 pt-28 mx-8 grid grid-cols-1 md:grid-cols-2 gap-x-8`}>
          <p className={"col-start-1 text-base font-semibold"}>{props.id}</p>
          <p className={"font-bold text-4xl md:col-start-1"}>{props.nama}</p>
          <img
            className={
              "w-full mt-4 rounded-lg md:row-span-2 lg:row-start-3 lg:col-start-1 lg:row-span-3"
            }
            src={props.img}
            alt={"gambar"}
          />
          <p className={"mt-4 lg:col-start-2 lg:row-start-3 md:text-xl"}>
            {props.desk1}
          </p>
          <p className={"mt-4 lg:col-start-2 lg:row-start-4 md:text-xl"}>
            {props.desk2}
          </p>
          <p className={"mt-4 lg:col-start-2 lg:row-start-5 md:text-xl"}>
            {props.desk3}
          </p>
          <HiOutlineArrowNarrowLeft
            onClick={handleClick}
            className={`bg-white animate-pulse hover:animate-none bg-opacity-50 backdrop-blur-sm text-black p-2 hover:scale-110 fixed bottom-4 rounded-full w-16 h-16 border-2 border-black md:bg-opacity-100 md:mt-16 lg:row-start-6 z-[9999] md:bg-white`}
          />
        </div>
        <div className={`${props.bg} hidden md:grid 2xl:grid-cols-2`}>
          <Home visibility="invisible" disp="md:hidden" />
        </div>
      </div>
      <Footer marg="-mt-24 md:mt-0" />
    </motion.div>
  );
};

export default Fruits;
