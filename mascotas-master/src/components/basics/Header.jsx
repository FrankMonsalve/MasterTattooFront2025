import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/icons/logo-app.png";
import { Link } from "react-router-dom";
import videoSrc from "../../assets/gif-background-header.mp4"

export default function Header() {


  return (
    <header className="header-container">
      <video className="header-video" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta la etiqueta de vídeo.
        </video>
      <section className="header-section">
        <div className="container">
          <nav className="home-nav">
            <figure className="logo-container">
              <img src={logo}/>
            </figure>
            <Link className="btn-nav" to="/" >Inicio</Link>
            <Link className="btn-nav" to="about">Artistas</Link>
          </nav>
        </div>
        <h1>Master Tattoo <br></br> En la piel como en el alma</h1>
      </section>
    </header>

  )
}