
import './styles.css';
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container-background">
      <div className="home-container-content">
        <div className="home-container-content--center">
          <h1 className="home-container-content__title">
            Blog App
          </h1>

          <p className="home-container-content__description">
            Descubre nuestra Blog App: crea tu perfil, comparte pensamientos breves con microposts y conecta con otros.
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
