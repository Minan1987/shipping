import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="text-gray-600 text-sm font-semibold py-3"
      aria-label="breadcrumb"
    >
      <ol className="list-none p-0 inline-flex">
        <li>
          <Link to="/" className="text-yellow-500 hover:underline">
            Home
          </Link>
          {pathnames.length > 0 && <span className="mx-2">{">"}</span>}
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="capitalize">
              {!isLast ? (
                <>
                  <Link to={routeTo} className="text-blue-600 hover:underline">
                    {name.replace("-", " ")}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="text-gray-500">{name.replace("-", " ")}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
