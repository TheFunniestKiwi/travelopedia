import React, { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/DestinationApi";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();

  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState(destination.city);
  const [newCountry, setNewCountry] = useState(destination.country);

  const handleUpdate = () => {
    let city = "";
    let country = "";

    if (newCity === "") {
      city = destination.city;
    } else {
      city = newCity;
    }

    if (newCountry === "") {
      country = destination.country;
    } else {
      country = newCountry;
    }

    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeded: destination.daysNeded,
    });

    setNewCity("");
    setNewCountry("");
    setIsUpdating(false);
  };

  return (
    <div
      className="row py-1"
      key={destination.id}
      style={{ borderBottom: "1px solid #333", borderTop: "1px solid #333" }}
    >
      <div className="col-4 offset-2 row">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="text"
                placeholder="city.."
                className="form-control"
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value)}
              />
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="text"
                placeholder="country.."
                className="form-control"
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value)}
              />
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>
      <div className="col-1 text-info">{destination.daysNeded} days</div>
      <div className="col-2">
        <button
          className="btn btn-danger form-control"
          onClick={() => deleteDestination(destination.id)}
        >
          Delete
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-warning"
          onClick={() => setIsUpdating(!isUpdating)}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? (
          <button className="btn btn-success" onClick={() => handleUpdate()}>
            Update
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Destination;
