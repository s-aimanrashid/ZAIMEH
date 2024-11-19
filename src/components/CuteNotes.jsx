import React, { useState, useEffect } from "react";
import styles from "../styles/CuteNotes.module.css";

const CuteNotes = () => {
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("");
  const fashionWords = [
    "Style",
    "Trendy",
    "Elegant",
    "Casual",
    "Vintage",
    "Comfort",
    "Modern",
    "Classic",
    "Streetwear",
    "Minimal",
    "Fashion",
    "Luxury",
    "Cool",
    "Edgy",
  ];

  useEffect(() => {
    // Setting the quote of the day (can be dynamic or an API call)
    const todayQuote = "Dress to express, not to impress!";
    setQuoteOfTheDay(todayQuote);
  }, []);

  return (
    <div className={styles.notesContainer}>
      <div className={styles.quoteOfTheDay}>
        <h3>ZAIMEH COLLECTION</h3>
        <p>{quoteOfTheDay}</p>
      </div>

      {/* Fashion words surrounding the quote */}
      <div className={styles.fashionWords}>
        {fashionWords.map((word, index) => (
          <span key={index} className={styles.fashionWord}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CuteNotes;
