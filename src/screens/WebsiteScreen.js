import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/header/Header";
import Web from "../components/websiteComponents/Web";
import WebsiteData from "../data/WebsiteData";

const WebsiteScreen = () => {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Recent Websites</h1>
            <button>
              <NavLink to="/">Home</NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="container blogcontainer">
        <div className="row">
          {WebsiteData.websites.map((website) => (
            <Web key={website._id} website={website} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WebsiteScreen;
