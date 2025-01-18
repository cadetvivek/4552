import React, { useEffect, useState } from "react";
import "../styles/SolutionsPage.css";

const SolutionsPage = () => {
  const images = [
    
    
    "https://www.digi.com/getattachment/applications/traffic-management/diagram.png?v=4", // Replace with actual image URLs
    "https://media.licdn.com/dms/image/C4D12AQGUUCM9Zzkexw/article-cover_image-shrink_720_1280/0/1598277843671?e=2147483647&v=beta&t=kAPwOiOCzYYyz5cE3Nn771oS00kNnNBJeJyio7ZCdDg",
    "https://thumbs.dreamstime.com/z/autonomous-car-passengers-future-technology-smart-concept-139968432.jpg?ct=jpeg",
    "https://www.symmetryelectronics.com/getmedia/494205f1-d826-4f73-b0ca-f06a4d6070cb/Tech-Ethics-Nov-Fig-1-1024x672.jpg",
    "https://media.licdn.com/dms/image/v2/D4D12AQHPcApK4MFs9g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1718776637280?e=2147483647&v=beta&t=sAnncSYq3ur48OA6uce9TAQ59wbtUbggSYD8hPGcr3I",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsPage;
