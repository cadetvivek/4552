// src/pages/TrackingPage.js
import "../styles/TrackingPage.css";

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
          <p>
            Universal parcel tracking to track your package from UPS, FedEx,
            DHL, USPS, India Post and more!
          </p>
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
          <img
            src="https://cdn.ship24.com/assets/images/home-new-banner.webp"
            alt="Tracking Dashboard"
          />
        </div>
      </div>
      <div className="location">
        <h2 id="titleMap">Track your order using google map</h2>
        <h4 id="titleMap">LOCATION</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5944155443667!2d67.12354627605013!3d25.01389403909968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346ef1e65505b%3A0xb2b56296fea70ccc!2sMohsin%20Foods!5e0!3m2!1sen!2s!4v1703674502338!5m2!1sen!2s"
          style={{ width: "100%", height: "400px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default TrackingPage;
