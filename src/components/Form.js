import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your message, ${formData.name}!`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>Full Name*</label>
      <input
        required
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label>Message*</label>
      <textarea
        required
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
