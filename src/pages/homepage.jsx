import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hort_cover_photo7 from "../assets/hort_cover_photo7.jpg";
import envelopeIcon from "../assets/envelope_icon.png";
import phoneIcon from "../assets/phone-icon.webp";
import facebookIcon from "../assets/facebook-icon.png";
import instaIcon from "../assets/insta-icon.png";
import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";
import before3 from "../assets/before3.jpg";
import after3 from "../assets/after3.jpg";


function Homepage() {
    const [clickedService, setClickedService] = useState(null); 
  
    const handleServiceClick = (serviceName) => {
      setClickedService((prevService) =>
        prevService === serviceName ? null : serviceName
      );
    };



  return (
    <div>
      <section id="home">
      <h1 className="home-heading">
        <span className="popeys">POPEY’S</span>{' '}
        <span className="horticulture">HORTICULTURE</span> –{' '}
        <span className="subtext">MOWING & GARDENING</span>
      </h1>

      <hr className="home-underline" />



      <p>Horticulturist based in Leeton, servicing the MIA region specialising in lawn maintenance & hedging</p>

        {/* Social Media Links */}
        <div className="homepage-links">
          <a href="mailto:ben@popeyshorticulture.com" className="homepage-link">
            <img src={envelopeIcon} alt="Email us" />
            <span>Email</span>
          </a>
          <a href="tel:0452226521" className="homepage-link">
            <img src={phoneIcon} alt="Call us" />
            <span>Phone</span>
          </a>
          <a
            href="https://www.facebook.com/popeyhorticulture"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
          >
            <img src={facebookIcon} alt="Visit our Facebook" />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/popeys.horticulture/"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-link"
          >
            <img src={instaIcon} alt="Visit our Instagram" />
            <span>Instagram</span>
          </a>
        </div>

       {/* Static Hero Image */}
          <div className="photo-container">
            <img src={hort_cover_photo7} alt="" />
          </div>

      </section>

      <section id="about">
      <div class="about-content">
        <h2>We help clients to create the perfect outdoor garden space</h2>
        <hr className="about-underline" />
        <p>Popey's Horticulture, your trusted local expert in garden care and horticultural services throughout Leeton, Narrandera, and the Murrumbidgee Irrigation Area (MIA). We specialise in creating and maintaining beautiful outdoor spaces, focusing on vibrant gardens, lush lawns, and expertly trimmed hedges. Whether it’s a residential property, commercial or public space, our goal is to bring your vision of a stunning, thriving outdoor environment to life.</p>

        <p>We believe that a well-maintained garden is more than just a space—it’s a source of relaxation, inspiration, and pride. Our commitment to quality craftsmanship, attention to detail, and friendly service ensures that every project is tailored to meet the unique needs of our clients. From regular upkeep to one-time transformations, we’re here to help you cultivate a garden that’s as functional as it is beautiful.</p>
        </div>
      </section>

      
      <section id="services">
        <h2 className="services-heading">
          <span className="our">OUR</span>{' '}
          <span className="services">SERVICES</span>
        </h2>
        <hr className="services-underline" />

        <div className="services-container">
          <div
            className={`service hedge-trimming ${
              clickedService === "hedge-trimming" ? "clicked" : ""
            }`}
            onClick={() => handleServiceClick("hedge-trimming")}
          >
            <h3>Hedge Trimming</h3>
            <p>At Popey's Horticulture, we provide precise and professional hedge trimming to give your garden a clean and polished look. Whether shaping ornamental hedges or maintaining privacy screens, our expert care ensures your hedges remain healthy and vibrant. We carefully trim to promote growth while achieving the exact look you desire, leaving your outdoor space looking neat and well-maintained.</p>
          </div>

          <div
            className={`service lawn-mowing ${
              clickedService === "lawn-mowing" ? "clicked" : ""
            }`}
            onClick={() => handleServiceClick("lawn-mowing")}
          >
            <h3>Lawn Mowing</h3>
            <p>Keeping your lawn in pristine condition has never been easier with Popey's Horticulture. We specialize in regular and one-time lawn mowing services tailored to your needs. Our team uses professional equipment to ensure an even cut and a lush, green finish. Let us take the hassle out of lawn care so you can enjoy a perfectly manicured lawn all year round.</p>
          </div>

          <div
            className={`service planting-mulching ${
              clickedService === "planting-mulching" ? "clicked" : ""
            }`}
            onClick={() => handleServiceClick("planting-mulching")}
          >
            <h3>Planting and Mulching</h3>
            <p>Transform your garden with our planting and mulching services. Popey’s Horticulture offers expert advice on selecting the right plants for your space and climate. From flower beds to vegetable gardens, we handle everything from soil preparation to planting. To maintain your garden’s health, we apply high-quality mulch to retain moisture, reduce weeds, and give your garden a finished, polished look.</p>
          </div>
        </div>
      </section>

      <section id="gallery">
           <h2 className="gallery-heading">Gallery</h2>
           <hr className="gallery-underline" />

          <h3 className="gallery-subheading">
            {
              "Before and After: Transforming Outdoor Spaces"
              .split(" ")
              .map((word, index) => (
                <span
                key={index}
                style={{ color: index % 2 !== 0 ? "#8b0000" : "inherit" }}>
                 {word + " "}
                </span>
                ))
                  }
                  </h3>
            <hr className="gallery-sub-underline" />

          
          <p className="gallery-description">
            Take a look at some of our recent projects that showcase the incredible
            transformations we bring to our clients' gardens and lawns.
          </p>



        <div className="gallery-container">
            <div className="gallery-item">
            <div className="gallery-image-wrapper before-wrapper">
                <img className="gallery-image before" src={before1} alt="Before" />
                <div className="image-label">Before</div>
            </div>
            <div className="gallery-image-wrapper after-wrapper">
                <img className="gallery-image after" src={after1} alt="After" />
                <div className="image-label">After</div>
            </div>
            </div>

            <div className="gallery-item">
            <div className="gallery-image-wrapper before-wrapper">
                <img className="gallery-image before" src={before2} alt="Before" />
                <div className="image-label">Before</div>
            </div>
            <div className="gallery-image-wrapper after-wrapper">
                <img className="gallery-image after" src={after2} alt="After" />
                <div className="image-label">After</div>
            </div>
            </div>

            <div className="gallery-item">
            <div className="gallery-image-wrapper before-wrapper">
                <img className="gallery-image before" src={before3} alt="Before" />
                <div className="image-label">Before</div>
            </div>
            <div className="gallery-image-wrapper after-wrapper">
                <img className="gallery-image after" src={after3} alt="After" />
                <div className="image-label">After</div>
            </div>
            </div>
        </div>
        </section>


                

    </div>
  );
}
export default Homepage;
