import React from "react";

const Web = ({ website }) => {
  return (
    <div className="blogBox col-lg-4 col-md-6 col-sm-6">
      <div className="blogBox_pic">
        <img src={website.image} alt={website.name} />
        <div className="blogLebal">
          <a href={`/websites/${website.id}`}>Project Details</a>
        </div>
      </div>
      <div className="blog_text">
        <ul>
          <li>
            <i className="far fa-calendar"></i> 12 May 2021
          </li>
        </ul>
        <h5>
          <a href={`/websites/${website.id}`}>{website.name}</a>
        </h5>
        <p>{website.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
};

export default Web;
