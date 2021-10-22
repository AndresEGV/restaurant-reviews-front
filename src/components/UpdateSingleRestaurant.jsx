import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateSingleRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      const {
        data: {
          data: {
            restaurant: { name, location, price_range },
          },
        },
      } = response;
      setName(name);
      setLocation(location);
      setPriceRange(price_range);
    };

    fetchData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    history.push("/");
  };
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">price Range</label>
          <input
            id="price_range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-control"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateSingleRestaurant;
