import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import WebsiteData from "../data/WebsiteData";

const WebsiteDetailScreen = () => {
  const { id } = useParams();

  const website = WebsiteData.websites.find((x) => x.id === id);
  if (!website) {
    return <h5>Website not found</h5>;
  }

  return (
    <div>
      <Header />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>{website.name}</h1>
            <p>{website.description}</p>
            <button>
              <a target="_blank" href={website.projectLink} rel="noreferrer">
                Project Link
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="screens">
          <div className="row">
            {website.imageTitle.map((appDetail) => (
              <div className="row justify-content-between websitesBorder">
                <div className="sidebar col-lg-3 col-md-4" key={appDetail.id}>
                  <h3>{appDetail.title}</h3>
                </div>
                <div className="webDetails col-lg-9 col-md-8">
                  <img src={appDetail.image} alt={appDetail.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetailScreen;
