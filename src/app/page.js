"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Image from "next/image";

export default function BootstrapPage() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Load Bootstrap JS
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Brand</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1>Welcome To Our Studio!</h1>
          <p className="lead">It's Nice To Meet You</p>
          <a className="btn btn-light btn-lg" href="#services">Tell Me More</a>
        </div>
      </header>

      {/* Services Section */}
      <section className="container py-5" id="services">
        <div className="text-center">
          <h2 className="section-heading">Services</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fas fa-shopping-cart fa-3x text-primary"></i>
            <h4 className="my-3">E-Commerce</h4>
            <p className="text-muted">Providing the best online shopping experience.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-laptop fa-3x text-primary"></i>
            <h4 className="my-3">Responsive Design</h4>
            <p className="text-muted">Optimized for mobile and desktop.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-lock fa-3x text-primary"></i>
            <h4 className="my-3">Web Security</h4>
            <p className="text-muted">Keeping your data safe and secure.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-5" id="about">
        <div className="container text-center">
          <h2>About</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-5" id="team">
        <div className="text-center">
          <h2>Our Amazing Team</h2>
          <p className="text-muted">Meet our professionals.</p>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <Image src="/team1.jpg" width={150} height={150} className="rounded-circle" alt="Parveen Anand" />
            <h4>Parveen Anand</h4>
            <p className="text-muted">Lead Designer</p>
          </div>
          <div className="col-md-4">
            <Image src="/team2.jpg" width={150} height={150} className="rounded-circle" alt="Diana Petersen" />
            <h4>Diana Petersen</h4>
            <p className="text-muted">Lead Marketer</p>
          </div>
          <div className="col-md-4">
            <Image src="/team3.jpg" width={150} height={150} className="rounded-circle" alt="Larry Parker" />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5" id="contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p className="text-muted">We would love to hear from you!</p>
          <form className="mt-4">
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control mb-3" placeholder="Your Name *" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control mb-3" placeholder="Your Email *" required />
              </div>
            </div>
            <input type="tel" className="form-control mb-3" placeholder="Your Phone *" required />
            <textarea className="form-control mb-3" rows="4" placeholder="Your Message *" required></textarea>
            <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-light text-center">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}