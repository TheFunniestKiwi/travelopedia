import { useGetRandomDestinationQuery } from "../api/RandomDestinationApi";
import React from "react";

function RandomDestination() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetRandomDestinationQuery();

  let content;
  if (isLoading) {
    content = <p> Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = (
      <div className="text-center border p-3">
        {" "}
        <h4 className="text-success">Random</h4>
        <p>
          <b>City: </b>
          {data.city}
        </p>
        <p>
          <b>Country: </b>
          {data.country}
        </p>
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3"> {content}</div>;
}

export default RandomDestination;
