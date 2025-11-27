const TopHeader = () => {
  return (
    <section className="top-header container ">
      <div className="flex justify-center items-center h-12 gap-5 fixed w-full z-10 top-0 bg-neutral-50">
        <p className="m-0 font-bold text-blue-950">
          Welcome to Leader in Logestic Solution since 2005
        </p>
        <p className="hidden md:block">
          Time Is Money{" "}
          <span className="font-bold text-blue-950">We Save You Both </span>
        </p>
      </div>
    </section>
  );
};

export default TopHeader;
