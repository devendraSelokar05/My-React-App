import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  return (
    <>
      {/* Cards  */}
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <h2 className="text-center py-4 fw-bold">Services We are Providing</h2>
        <div className="container">
          <div className="row mx-3">
            {/* First Card */}
            <div className="col-md-4">
              <div className="card mb-4 image-container">
                <img src="assets/coding-man-2-1536x1025.png" className="card-img-top hover-effect" alt="Web Development" />
                <div className="card-body text-center">
                  <h3 className="card-title pt-3">Web Development</h3>
                  <Link className="btn btn-secondary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col-md-4">
              <div className="card mb-4 image-container">
                <img src="assets/man-suit-standing-office-with-clipboard-pointing-poster-with-words-1536x1025.png" className="card-img-top hover-effect" alt="Digital Marketing" />
                <div className="card-body text-center">
                  <h3 className="card-title pt-3">Digital Marketing</h3>
                  <Link className="btn btn-secondary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col-md-4">
              <div className="card mb-4 image-container">
                <img src="assets/seo.png" className="card-img-top hover-effect" alt="SEO" />
                <div className="card-body text-center">
                  <h3 className="card-title pt-3">SEO</h3>
                  <Link className="btn btn-secondary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Fourth Card */}
            <div className="col-md-4">
              <div className="card mb-4 image-container">
                <img src="assets/coding-man-3-1536x1025.png" className="card-img-top hover-effect" alt="Graphics Designing" />
                <div className="card-body text-center">
                  <h3 className="card-title pt-3">Graphics Designing</h3>
                  <Link className="btn btn-secondary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Fifth Card */}
            <div className="col-md-4">
              <div className="card mb-4 image-container">
                <img src="assets/content-1536x1025.png" className="card-img-top hover-effect" alt="Content Creation" />
                <div className="card-body text-center">
                  <h3 className="card-title pt-3">Content Creation</h3>
                  <Link className="btn btn-secondary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Sixth Card */}
            <div className="col-md-4">
              <div className="card mb-4 image-container">
                <img src="assets/counselling-1536x1025.png" className="card-img-top hover-effect" alt="Career Counselling" />
                <div className="card-body text-center">
                  <h3 className="card-title pt-3">Career Counselling</h3>
                  <Link className="btn btn-secondary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies We are using*/}
      <div className="container my-4">
        <div className="header-banner">
          <h2>Technologies we are using</h2>
        </div>

        {/* Icons Section */}
        <div className="row tech-icons justify-content-center text-center mt-3">
          <div className="col-3">
            <img src="assets/html.png" alt="HTML5" />
          </div>
          <div className="col-3">
            <img src="assets/Css.png" alt="CSS3" />
          </div>
          <div className="col-3">
            <img src="assets/Javascript.png" alt="JavaScript" />
          </div>
          <div className="col-3">
            <img src="assets/Bootstrap.png" alt="Bootstrap" />
          </div>
        </div>
        <div className="row tech-icons justify-content-center text-center">
          <div className="col-3">
            <img src="assets/React.png" alt="ReactJS" />
          </div>
          <div className="col-3">
            <img src="assets/nodejs.png" alt="NodeJS" />
          </div>
          <div className="col-3">
            <img src="assets/My Sql.png" alt="MySQL" />
          </div>
          <div className="col-3">
            <img src="assets/github.png" alt="GitHub" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
