
import './styles.css';
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="home-container-background">
      <div className="home-container-content">
        <div className="home-container-content--center">
          <h1 className="home-container-content__title">
            Blog App
          </h1>

          <p className="home-container-content__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea! 
          </p>

          <div className="home-container-button">
            <Link
              className="home-container-button__signup"
              to="/signup"
            >
              Sign Up
            </Link>

            <Link
              className="home-container-button__login"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Home;
