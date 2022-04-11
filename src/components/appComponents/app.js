import React from "react";

const App = ({ app }) => {
  return (
    <div className="blogBox col-lg-4 col-md-6 col-sm-6">
      <div className="blogBox_pic">
        <img src={app.image} alt={app.name} />
        <div className="blogLebal">
          <a href={`/apps/${app.id}`}>Project Details</a>
        </div>
      </div>
      <div className="blog_text">
        <ul>
          <li>
            <i className="far fa-calendar"></i> 12 May 2021
          </li>
        </ul>
        <h5>
          <a href={`/apps/${app.id}`}>{app.name}</a>
        </h5>
        <p>{app.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
};

export default App;
