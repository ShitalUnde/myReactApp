import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <p>Author: Hege Refsnes</p>
        <p>
          <Link to="mailto:hege@example.com">hege@example.com</Link>
        </p>
      </footer>
    </>
  );
}
