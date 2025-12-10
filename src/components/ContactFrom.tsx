import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string;
}

const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const formSubmiting: SubmitHandler<IFormInput> = (data) => {
    // 1. Send message to ADMIN
    emailjs
      .send("service_hs16jw5", "template_cbpiiuj", data, "vFOwgcwCbT-hGW1i9")

      //   // 2. Send Auto-Reply to USER
      //   emailjs
      //     .send("service_hs16jw5", "template_hfcbc5b", data, "vFOwgcwCbT-hGW1i9")
      .then(() => {
        alert("Message Sent Successfully!");
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(formSubmiting)} className="space-y-4">
        {/* NAME */}
        <div>
          <input
            type="text"
            placeholder="Your Name:"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 3,
                message: "Name should have at least 3 characters.",
              },
              maxLength: {
                value: 30,
                message: "Name should have a maximum of 30 characters.",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="text"
            placeholder="Your Email:"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("email", {
              required: "Email is required!",
              minLength: {
                value: 1,
                message: "Email should have at least 1 characters.",
              },
              maxLength: {
                value: 30,
                message: "Email should have a maximum of 30 characters.",
              },
              pattern: {
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                message: "Your email is not valid.",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            type="text"
            placeholder="Your Phone Number:"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("phone", {
              required: "Phone number is required!",
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Your phone number is not valid.",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            placeholder="Your Message:"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("message", {
              required: "message is required!",
            })}
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 text-sm rounded-md transition"
        >
          SUBMIT NOW
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
