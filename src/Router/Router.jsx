import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Components/Loader.jsx";

const Home = React.lazy(() => import("../Pages/Home.jsx"));
const About = React.lazy(() => import("../Pages/About.jsx"));
const Contact = React.lazy(() => import("../Pages/Contact.jsx"));
const SelfProject = React.lazy(() => import("../Pages/SelfProject.jsx"));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/portfolio/">
          <Route path=":slug" element={<SelfProject />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
