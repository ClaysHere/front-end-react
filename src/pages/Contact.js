import Form from "../components/Form";
const Contact = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="flex sm:flex-col lg:flex-row pt-20 bg-slate-300">
      <div className=" lg:flex-1 items-center w-full flex flex-col py-20 lg:py-36 gap-y-20">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <Form />
      </div>
      <div className={` lg:flex-1 bg-[url('../src/img/contact.jpg')] bg-cover`}>
        {/* <img src={Background} alt="Orange" /> */}
        <div className="w-full h-full bg-slate-800 bg-opacity-50"></div>
      </div>
    </div>
  );
};
export default Contact;
