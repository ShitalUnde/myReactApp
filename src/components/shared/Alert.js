import React from "react";

export default function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {props.alertData}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.clearMode}
      ></button>
    </div>
  );
}
