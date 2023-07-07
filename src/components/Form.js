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
    <form
      className="w-full px-16 md:px-32 xl:px-32 2xl:px-40 flex flex-col"
      onSubmit={handleSubmit}
      autoComplete="off">
      <div className="flex flex-col gap-y-2 mt-4">
        <label>Full Name*</label>
        <input
          className="border px-2 py-2 border-slate-600 w-full rounded-md"
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4">
        <label>Email</label>
        <input
          className="border px-2 py-2 border-slate-600 w-full rounded-md"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4">
        <label>Phone Number</label>
        <input
          className="border px-2 py-2 border-slate-600 w-full rounded-md"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4">
        <label>Message*</label>
        <textarea
          className="border px-2 py-2 border-slate-600 w-full rounded-md"
          required
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-teal-300 text-lg text-slate-700 hover:text-slate-700/70 font-bold hover:bg-teal-500 px-4 py-2 rounded-xl mt-4 w-1/2 self-center"
        type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
