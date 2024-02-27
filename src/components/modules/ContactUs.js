import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const navigate = useNavigate()
  return (
    <>
      <div className="container my-3">
        <div>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</div>
        <button  onClick={()=> navigate(-1)} className="btn btn-primary my-3">Go back</button>
      </div>

    </>
  );
}
