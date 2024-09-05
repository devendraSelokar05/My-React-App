import React from 'react';
import './Home.css';
import Cards from './Cards'; // Import the Cards component

const Home = () => {
  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://careerbeginners.com/wp-content/uploads/2023/12/banner2.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://careerbeginners.com/wp-content/uploads/2023/12/banner3.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://careerbeginners.com/wp-content/uploads/2023/12/banner1.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Banner code */}
      <div className="container-fluid p-5">
        <h1 className="header text-center py-2 text-white">Put your business to the next level</h1>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="image-container">
              <img src="./assets/business-man-interacting-with-people-cogs-graphics-against-office-background-768x1086.png" className="img-" style={{height: '400px', width:"350px", margin:'5vw'}} alt="Business Image"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-container">
              <div className="text-box mb-4 bg-white px-3 me-5 border border-3 border-dark">
                <h2>1. Workflow according to your idea.</h2>
                <p>Design an effective workflow starts with understanding your unique business ideas. By aligning processes with your ideas, we unlock the potential for a seamless, efficient system. Let's shape a workflow that not only reflects your creativity but also optimizes productivity. This Digital Marketing and IT Solutions services match with your concept, ensuring a smooth and rewarding journey towards your goals.</p>
              </div>
              <div className="text-box mb-4 bg-white px-3 me-5 border border-3 border-dark">
                <h2>2. Guidance and Assistance to grow your business.</h2>
                <p>We provide end-to-end assistance to help your business grow. Get expert guidance to overcome challenges, meet opportunities, and expand effectively. Partner with us to achieve success and sustainable growth in today's competitive market.</p>
              </div>
              <div className="text-box mb-4 bg-white px-3 me-5 border border-3 border-dark">
                <h2>3. 24/7 technical support and support in generating leads.</h2>
                <p>Access constant technical support whenever you need it, round the clock. Plus, tap into our expertise to generate high-quality leads and propel your business growth. Partner with us for reliable support in both technical problem-solving and effective lead generation strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include Cards component here */}
      <Cards />
    </>
  );
}

export default Home;
