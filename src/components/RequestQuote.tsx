import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import bg from "/images/skyline.png";

interface IFormInput {
  collectionPostcode: string;
  numberOfPackages: string;
  totalWeight: string;
  destinationCity: string;
  email: string;
  [key: string]: string;
}

const RequestQuote = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const formSubmiting: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    // Send to Admin
    emailjs
      .send("service_hs16jw5", "template_fxw755q", data, "vFOwgcwCbT-hGW1i9")

      //   // Auto Reply
      //   emailjs
      //     .send("service_hs16jw5", "template_hfcbc5b", data, "vFOwgcwCbT-hGW1i9")
      .then(() => {
        alert("Message Sent Successfully!");
        reset();
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <section
      className="md:min-h-[50vh] bg-yellow-600 py-6 bg-no-repeat bg-auto bg-bottom"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-center text-2xl md:text-5xl font-bold text-white mb-6 tracking-wide">
        SHIPPING FOR INDIVIDUALS
      </h2>

      <div className="m-2 md:max-w-2xl md:mx-auto bg-gray-200 px-4 md:px-8 py-4 rounded shadow-lg">
        <form onSubmit={handleSubmit(formSubmiting)}>
          {/* Collection Postcode */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Collection Postcode (UK)"
              className="w-full px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("collectionPostcode", {
                required: "Collection Postcode is required!",
              })}
            />
            {errors.collectionPostcode && (
              <p className="text-red-600 text-sm mt-1">
                {errors.collectionPostcode.message}
              </p>
            )}
          </div>

          {/* Two Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* numberOfPackages */}
            <div>
              <input
                type="text"
                placeholder="Number of Packages"
                className="w-full px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("numberOfPackages", {
                  required: "Number of Packages is required!",
                })}
              />
              {errors.numberOfPackages && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.numberOfPackages.message}
                </p>
              )}
            </div>

            {/* totalWeight */}
            <div>
              <input
                type="text"
                placeholder="Total Weight (kg)"
                className="w-full px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("totalWeight", {
                  required: "Total weight is required!",
                })}
              />
              {errors.totalWeight && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.totalWeight.message}
                </p>
              )}
            </div>
          </div>

          {/* Destination City */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Destination City"
              className="w-full px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              {...register("destinationCity", {
                required: "Destination City is required!",
              })}
            />
            {errors.destinationCity && (
              <p className="text-red-600 text-sm mt-1">
                {errors.destinationCity.message}
              </p>
            )}
          </div>

          {/* Email + Button */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
            {/* Email */}
            <div className="md:col-span-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("email", {
                  required: "Email is required!",
                  minLength: {
                    value: 10,
                    message: "Email should have at least 10 characters.",
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
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              className={`bg-blue-950 text-white text-sm font-bold py-2 rounded shadow transition
                          ${
                            loading
                              ? "opacity-70 cursor-not-allowed"
                              : "hover:bg-blue-900"
                          }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "GET A QUOTE"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestQuote;
