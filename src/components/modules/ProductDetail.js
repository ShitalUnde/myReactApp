import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();


 const [searchParams] =  useSearchParams()

   console.log(params);

   console.log(searchParams.get('name'));
  return (
    <>
      <div className="container my-3">
        <h1>  {params.id} . {searchParams.get('name')} </h1> 
        <hr />
       
      </div>
    </>
  );
}
