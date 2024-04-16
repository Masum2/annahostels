import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img width="114" height="58" src='https://annapurnahostels.com/assets/img/logo1.png'/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto text-center">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link" href="/">About</a>
              <a class="nav-link" href="/">Blog</a>
              <a class="nav-link active" aria-current="page" href="/">Services</a>
              <a class="nav-link" href="/">Cooking</a>
              <a class="nav-link" href="/">Photos</a>
              <a class="nav-link" href="/">Contact</a>
              <a class="nav-link" href="/">Refer to earn</a>
 
            </div>
          </div>
        </div>
      </nav>


    </>
    );
};

export default Navbar;