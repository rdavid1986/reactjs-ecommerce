import React from "react";
import { Ping } from "@uiball/loaders";
import "./loader.css";

function Loader() {
  return <Ping size={150} speed={1} className="loader" color="lightblue" />;
}
export default Loader;