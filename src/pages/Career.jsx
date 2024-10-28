import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
const Career = () => {
    
  return (
    <div>
        <Nav select={"career"} />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-box">
                <h1>
                  WE'RE
                  <br />
                  HIRING
                </h1>
              </div>
              <a href="#dev">
                {" "}
                <img className="mob-img pl-5" src="base2.webp" alt="dev_img" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container about">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="content">
                  <h1 className="title-center">Who We Are ?</h1>
                  <p className="p-about">
                    GUVI is an online skill acceleration and hiring platform
                    which makes IT skilling more effective by offering
                    technology courses like Python,Machine Learning, Artificial
                    Intelligence, etc. in vernacular languages(Tamil, Telugu,
                    Hindi, Kannada, Bengali). AI-based adaptive algorithm
                    customizes and proposes the learning path based on student
                    skill level. GUVI uses similar approach like Udacity but the
                    path breaking difference is that, it delivers the content in
                    vernacular languages which helps the students to learn
                    faster and make them land in jobs .GUVI builds the coding
                    profile for learner by tracking his learning activities and
                    show case it to their hiring partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="flow.webp"
            alt=""
            className=" img-fluid feature-flow works-img"
          />
        </div>
        <div className="container ">
          <h1 className="title-ready">Ready To Take Challenge?</h1>
          <p className="p-chal">
            Upload your files to github and do mail the link to dev@guvi.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
