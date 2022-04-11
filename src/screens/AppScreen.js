import React from "react";
import { NavLink } from "react-router-dom";
import App from "../components/appComponents/app";
import Header from "../components/header/Header";
import AppData from "../data/AppData";

const AppScreen = () => {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Recent Apps</h1>
            <button>
              <NavLink to="/">Home</NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="container blogcontainer">
        <div className="row">
          {AppData.apps.map((app) => (
            <App key={app._id} app={app} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppScreen;
