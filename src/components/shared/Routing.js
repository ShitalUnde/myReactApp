import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import About from "../modules/About";
import ContactUs from "../modules/ContactUs";
import NoMatch from "../modules/NoMatch";

// import Product from "../modules/Product";
// import FeaturedProduct from "../modules/FeaturedProduct";
// import NewProduct from "../modules/NewProduct";
import ProductDetail from "../modules/ProductDetail";
import TextForm from "../modules/TextForm";
import Login from "../utils/Login";
import RequiredAuth from "../utils/RequiredAuth";
import Profile from "../modules/Profile";

const LazyAbout = React.lazy(() => import("../modules/About"));
const LazyProduct = React.lazy(() => import("../modules/Product"));
const LazyFeaturedProduct = React.lazy(() =>
  import("../modules/FeaturedProduct")
);

const LazyNewProduct = React.lazy(() => import("../modules/NewProduct"));

export default function Routing() {
  return (
    <>
      <Suspense fallback="....Loading">
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter the text to analyze below" />}
          ></Route>
          <Route path="/about" element={<LazyAbout />}></Route>
          <Route
            path="/contact-us"
            element={
              <RequiredAuth>
                {" "}
                <ContactUs />
              </RequiredAuth>
            }
          ></Route>

          {/* nested Route and index route */}
          {/* <Route path="/product" element={<LazyProduct />}>
            <Route index element={<LazyFeaturedProduct />}></Route>
            <Route
              path="featured-product"
              element={ <LazyFeaturedProduct />}
            ></Route>
            <Route path="new-product" element={<LazyNewProduct />}></Route>
          </Route> */}

          <Route
            path="/product"
            element={
              <RequiredAuth>
                <LazyProduct />
              </RequiredAuth>
            }
          >
            <Route
              index
              element={
                <RequiredAuth>
                  <LazyFeaturedProduct />
                </RequiredAuth>
              }
            ></Route>
            {/* Add authentication check for each nested route */}
            <Route
              path="featured-product"
              element={
                <RequiredAuth>
                  <LazyFeaturedProduct />
                </RequiredAuth>
              }
            ></Route>
            <Route
              path="new-product"
              element={
                <RequiredAuth>
                  <LazyNewProduct />
                </RequiredAuth>
              }
            ></Route>
          </Route>

          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/profile"
            element={
              <RequiredAuth>
                {" "}
                <Profile />{" "}
              </RequiredAuth>
            }
          ></Route>

          {/* invalid route */}
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
