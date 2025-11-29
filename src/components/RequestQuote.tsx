import bg from "/images/skyline.png";

const RequestQuote = () => {
  return (
    <section
      className="bg-yellow-600 py-6 relative h-1/2 bg-no-repeat  bg-auto bg-bottom"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-center text-2xl md:text-5xl font-bold text-white mb-6 tracking-wide">
        SHIPPING FOR INDIVIDUALS
      </h2>

      <div className="max-w-2xl mx-auto bg-gray-200 px-8 py-4 rounded shadow-lg">
        {/* First Input */}
        <input
          type="text"
          placeholder="Collection Postcode (UK)"
          className="w-full mb-4 px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Two Inputs in Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Number of Packages"
            className="w-full  px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Total Weight (kg)"
            className="w-full  px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Destination */}
        <input
          type="text"
          placeholder="Destination City"
          className="w-full mb-4 px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Email + Button */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <input
            type="email"
            placeholder="Email"
            className="md:col-span-3 w-full  px-2 py-2 text-sm rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button className="bg-blue-950 text-white text-sm font-bold py-2  rounded shadow hover:bg-blue-900 transition">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
