import React from "react";
import { useSearchParams } from "react-router-dom";

export default function NewProduct() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("filter"));

  return (
    <div className="container">
      <button
        className="btn btn-success mx-2"
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Add Active Search Param
      </button>
      <button className="btn btn-warning" onClick={() => setSearchParams({})}>
        Remove search Param
      </button>

      <hr />

      {searchParams.get("filter") === "active" ? <p>Active Records</p> : <p> All Records</p>}
    </div>
  );
}
