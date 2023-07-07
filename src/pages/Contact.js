import Form from "../components/Form";
import Background from "../img/contact.jpg";
const Contact = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="ctc flex pt-20">
      <div className="left_ctc flex-1">
        <h1>Contact Us</h1>
        <Form />
      </div>
      <div className="right_ctc flex-1">
        <img src={Background} alt="Orange" />
      </div>
    </div>
  );
};
export default Contact;
