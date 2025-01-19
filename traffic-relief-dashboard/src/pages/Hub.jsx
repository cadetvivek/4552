


import React, { useState } from 'react';
import '../styles/Hub.css';

const Hub = () => {
  const [activeVideo, setActiveVideo] = useState(null);

// hear my serach implimentation start

const [inputValue, setInputValue] = useState('');
const [responseField, setResponseField] = useState([]);
const [imageContainer, setImageContainer] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const numberPerPage = 4;

const url = 'https://www.googleapis.com/customsearch/v1?';
const apiKey = 'key=AIzaSyDiAg6Yx4YPLvlLDwPXH0pD2blULPBk03A';
const cx = '&cx=008993671637674012003:y7jt0xhysdv';

const validateForm = () => {
  if (!inputValue.trim()) {
    return false;
  }
  return true;
};

const getSuggestions = async () => {
  const query = inputValue;
  const endpoint = `${url}${apiKey}${cx}&q=${query}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    if (data.items) {
      paginateResults(data.items);
    } else {
      setResponseField(['Try again! There were no suggestions found!']);
      setImageContainer([]);
    }
  } catch (error) {
    setResponseField(['Error fetching data']);
    setImageContainer([]);
  }
};

const paginateResults = (data) => {
  const list = [];
  const imgList = [];

  data.forEach((item) => {
    const imageUrl = item.pagemap?.cse_image?.[0]?.src ||
      'https://www.ggf.org.uk/wp-content/uploads/2018/03/jpg-icon.png';

    imgList.push(
      <img src={imageUrl} alt="result" key={item.link} height="120px" width="auto" />
    );

    list.push(
      <div className="searchResultItem" key={item.link}>
        <div className="resultItemHeader">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </div>
        <div className="resultItemBody">{item.snippet}</div>
      </div>
    );
  });

  setResponseField(list);
  setImageContainer(imgList);
};

const handleSearch = (e) => {
  e.preventDefault();
  if (validateForm()) {
    getSuggestions();
  }
};


// here my close serach

  const caseStudies = [
    {
        id: 1,
        title: '🧠 Artificial intelligence traffic control system using computer vision 👁️',
        videoUrl: 'https://www.youtube.com/embed/SJG3pRjNH7Q'
      },
      {
        id: 2,
        title: 'Smart Control of Traffic Light System using Artificial Intelligence',
        videoUrl: 'https://www.youtube.com/embed/OssY5pzOyo0'
      },
      {
        id: 3,
        title: 'how to make Automatic Traffic ligh management system',
        videoUrl: 'https://www.youtube.com/embed/3jyRp6SVao8'
      },
      {
        id: 4,
        title: 'Traffic Signal Management and Control System based on density of vehicles and emergency vehicles',
        videoUrl: 'https://www.youtube.com/embed/LmQhJ1nYji8'
      },
      {
        id: 5,
        title: 'Smart Traffic Management: Keeping Cities Moving in the 21st Century',
        videoUrl: 'https://www.youtube.com/embed/NfhiX0DXMcE'
      },
      {
        id: 6,
        title: "how to take idea about Traffic management in smart cities using deep learning",
        videoUrl: 'https://www.youtube.com/embed/mPZ37_6C7nk'
      },
  ];

  const services = [
    {
      id: 1,
      title: 'Emergency Routing Control',
      icon: '🚑',
      description: 'Smart traffic management systems that adapt road routing and signal timing for emergency vehicles using real-time congestion data and vehicle location tracking.',
    },
    {
      id: 2,
      title: 'Adaptive Traffic Control',
      icon: '🚦',
      description: 'Strategic implementation of traffic systems using sensors and cameras to detect congestion and optimize traffic flow in real-time.',
    },
    {
      id: 3,
      title: 'Backhaul Communications',
      icon: '📡',
      description: 'High-quality, high-availability communications network between the traffic management center and network components with cellular and fiber links support.',
    },
    {
      id: 4,
      title: 'Connected Vehicle Systems',
      icon: '🚗',
      description: 'Advanced technology designed to prevent collisions between vehicles, transit systems, and pedestrians through critical infrastructure implementation.',
    },
    {
      id: 5,
      title: 'Public Transit Systems',
      icon: '🚌',
      description: 'Integrated traffic control management systems for routing emergency vehicles and public transport, with automated scheduling and optimal routing.',
    },
    {
      id: 6,
      title: 'Simplified Infrastructure Provider',
      icon: '🏗️',
      description: 'Comprehensive traffic management solutions integrating various technologies from cameras to connected vehicle systems with reliable cellular connectivity.',
    },
  ];

//   this is a feature array objec
  const features = [
    {
      id: 1,
      title: 'Real-time monitoring',
      icon: '📊',
      description: 'Medical devices with Digi connectivity can provide remote patient monitoring in real time to caregivers and hospital systems, no matter where the patient is located.'
    },
    {
      id: 2,
      title: 'Faster time-to-market',
      icon: '⏱️',
      description: 'Go wireless with Digi - fast. You don\'t need to develop in-house RF capabilities. Just put Digi into your product design and you\'ve got secure, reliable connectivity.'
    },
    {
      id: 3,
      title: 'Certification to go',
      icon: '🏅',
      description: 'Digi simplifies your regulatory process with wireless modules that come pre-certified by the FCC in the US and other regions around the world.'
    },
    {
      id: 4,
      title: 'Long-term availability',
      icon: '🔄',
      description: 'You can integrate Digi embedded modules with the confidence that continue production through your product development, approvals, and long, successful market life.'
    }
  ];
  const VideoCard = ({ id, title, videoUrl }) => {
    const isPlaying = activeVideo === id;

    return (
     
      <div className="video-card" onClick={() => setActiveVideo(isPlaying ? null : id)}>
        <div className="video-container">
          {isPlaying ? (
            <iframe
              src={videoUrl}
              title={title}
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            />
          ) : (
            <div className="video-placeholder">
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <h3 className="video-title">{title}</h3>
      </div>
    );
  };

  return (
    <div className="hub-container">
      <header className="hub-header">
        <h1>Productivity Hub</h1>
        <p className="hub-subtitle">
          We help assess your challenges, define your goals and plan your traffic management solution roll-out,
          and we can even partner with you in executing your deployment.
        </p>
      </header>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="case-studies-container">
        <h1 className="main-title">Productivity Hub media</h1>
        <div className="video-grid">
          {caseStudies.map((study) => (
            <VideoCard key={study.id} id={study.id} title={study.title} videoUrl={study.videoUrl} />
          ))}
        </div>
      </div>


     
    <div className="hub-container">
      <header className="header">
        <h1>Medical Device Connectivity Solutions</h1>
        <p className="subtitle">
          Adding wireless capabilities to your medical devices makes critical patient information immediately
          available to caregivers and hospital systems. Connected devices can also improve billing accuracy,
          asset management, and maintenance.
        </p>
      </header>

      <section className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="diagram-section">
        <h2>Medical Device Connectivity Architecture</h2>
        <div className="diagram-container">
          <img 
            src="https://www.digi.com/getattachment/solutions/by-industry/medical/diagram.jpg" 
            alt="Medical Device Connectivity Diagram"
            className="diagram-image"
          />
        </div>
      </section>
    </div>
  
     {/* serach start */}
         <div>
      <header>
        <div className="logo">
       
                    <h3>Entertainment Options</h3>

</div>
<form className="searchBar" onSubmit={handleSearch}>
  <input
    className="searchInput"
    placeholder="Type here..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
  <button type="submit" className="searchButton">
    SEARCH
  </button>
</form>
</header>
<section className="mainBody">
<div className="searchImageResult">{imageContainer}</div>
<div className="searchResult">{responseField}</div>
</section>
<form className="pageButtons">
<button id="first" onClick={() => setCurrentPage(1)}>{'<<'}</button>
<button id="previous" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>{'<'}</button>
<button id="next" onClick={() => setCurrentPage((prev) => prev + 1)}>{'>'}</button>
<button id="last" onClick={() => setCurrentPage(100)}>{'>>'}</button>
</form>
</div>


      
  

    
    </div>
  );
  // serach finish
};

export default Hub;

