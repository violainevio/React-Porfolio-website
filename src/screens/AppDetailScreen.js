import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import AppData from "../data/AppData";

const AppDetailScreen = () => {
  const { id } = useParams();

  const app = AppData.apps.find((x) => x.id === id);
  if (!app) {
    return <h5>App not found</h5>;
  }

  return (
    <div>
      <Header />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>{app.name}</h1>
            <p>{app.description}</p>
            <button>
              <a target="_blank" href={app.projectLink} rel="noreferrer">
                Project Link
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="screens">
          <div className="row">
            {app.imageTitle.map((appDetail) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={appDetail.id}>
                <div className="screensBox">
                  <h4>{appDetail.title}</h4>
                  <div className="screenImage">
                    <img src={appDetail.image} alt={appDetail.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailScreen;
