import React, { useState, useEffect } from "react";
import styles from "../styles/HomePage.module.css";
import blackTee from "../assets/blacktee.jpg";
import whiteTee from "../assets/whiteTee.jpg";
import Products from "./Products";
import CuteNotes from "./CuteNotes";
import ProductsPage from "./ProductsPage";

const images = [blackTee, whiteTee, blackTee, whiteTee];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.homepage}>
      {/* Custom cursor */}
      <div
        className={styles.customCursor}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      <div className={styles.slideshow}>
        {/* Left Side: Zaimeh and Slogan */}
        <div className={styles.slideshowLeft}>
          <h1 className={styles.mainTitle}>ZAIMEH</h1>
          <p className={styles.slogan}>Own the Trend</p>
          <p className={styles.slogan}>اپنا انداز اپنائیں</p>
        </div>

        {/* Center: Images */}
        <div className={styles.slideshowCenter}>
          <button
            className={`${styles.slideButton} ${styles.left}`}
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <img
            src={images[currentIndex]}
            alt="Slideshow"
            className={styles.slideshowImage}
          />
          <button
            className={`${styles.slideButton} ${styles.right}`}
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>

        {/* Right Side: Description */}
        <div className={styles.slideshowRight}>
          <h2>A Great Fashion</h2>
          <p>
            <h1>Style.</h1> <br />
            <h2>Comfort</h2> <br /> <h2>Trends</h2> <br />
            <h4>Everything you need in one place.</h4>
          </p>
        </div>
      </div>

      <div>
        <marquee className={styles.marquee}>
          Check out our latest arrivals and special discounts! Don't miss out!
        </marquee>
      </div>
      {/* Products Section */}
      <div className={styles.products}>
        <h2 className={styles.productsTitle}>Featured T-Shirts</h2>
        <p className={styles.productsDescription}>
          Explore our latest collection of trendy t-shirts in various styles and
          colors.
        </p>
        <Products />
      </div>
      <CuteNotes />
      {/* About Us Section */}
      <div className={styles.aboutUs}>
        <h2>About Us</h2>
        <p>
          Welcome to ZAIMEH, where fashion meets comfort and style. Our mission
          is to provide high-quality, trendy clothing that makes you stand out
          in the crowd. Every product is designed with care to ensure that you
          not only look great but feel great too.
        </p>
        <p>
          Whether you’re looking for casual wear, street style, or something for
          a special occasion, ZAIMEH has got you covered. We’re passionate about
          creating apparel that blends comfort with the latest fashion trends.
        </p>
        <h3>Contact Us</h3>
        <p>
          Have questions or want to learn more? Reach out to us at: <br />
          <strong>Email:</strong> support@zaimeh.com <br />
          <strong>Phone:</strong> +92-312-3456789
        </p>
      </div>

      {/* Side Decorative Elements */}
      <div className={styles.sideElements}>
        <div className={styles.circleLeft}></div>
        <div className={styles.circleRight}></div>
      </div>
    </div>
  );
}

export default HomePage;
