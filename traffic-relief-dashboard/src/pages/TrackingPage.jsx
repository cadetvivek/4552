// src/pages/TrackingPage.js
import '../styles/TrackingPage.css';

function TrackingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add tracking logic here
  };

  return (
    <div className="tracking-page">
      <div className="tracking-content">
        <div className="tracking-left">
          <h1>Track your order</h1>
          <p>Universal parcel tracking to track your package from UPS, FedEx, DHL, USPS, China Post and more!</p>
          <form onSubmit={handleSubmit} className="tracking-form">
            <input
              type="text"
              placeholder="My shipment tracking number"
              className="tracking-input"
            />
            <button type="submit" className="track-button">
              Track parcel
            </button>
          </form>
        </div>
        <div className="tracking-right">
          <img src="https://cdn.ship24.com/assets/images/home-new-banner.webp" alt="Tracking Dashboard" />
        </div>
      </div>
    </div>
  );
}

export default TrackingPage;