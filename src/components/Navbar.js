import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className={props.bg}>
        <nav className="px-4 py-8 w-full bg-black text-white fixed z-[99999] bg-opacity-60 backdrop-blur-sm flex justify-between items-center">
          <div className="text-3xl font-semibold font-mono">
            Fruit
            <span className="text-red-400 italic">Pedia</span>.
          </div>
          <div>
            By <span className="italic">CodePhile.</span>
          </div>
        </nav>
        {/* <div className={`${props.bg}`}></div> */}
      </div>
    </motion.div>
  );
};

export default Navbar;
