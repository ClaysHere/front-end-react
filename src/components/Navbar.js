const Navbar = () => {
  return (
    <>
      <nav className="px-4 py-8 w-full bg-black text-white fixed z-[99999] bg-opacity-60 backdrop-blur-sm flex justify-between items-center">
        <div className="text-3xl font-semibold font-mono">
          Fruit
          <span className="text-slate-400">Pedia</span>.
        </div>
        <div>
          By <span className="italic">CodePhile.</span>
        </div>
      </nav>
      <div className="py-12"></div>
    </>
  );
};

export default Navbar;
