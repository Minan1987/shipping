import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const SearchResult = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("http://localhost:9000/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  useEffect(() => {
    if (query && services.length > 0) {
      const filtered = services.filter((service) =>
        service.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  }, [query, services]);

  return (
    <div className="p-5">
      <div className="container">
        <h1 className="fs-3">
          Search Results for:{" "}
          <span className="text-secondary fs-3 fw-light">{query}</span>
        </h1>
        <div className="row">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="col-md-4">
                <div className="card">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found for "{query}".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
