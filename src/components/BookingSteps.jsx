function BookingSteps() {
  const steps = [
    {
      number: "01",
      title: "Inquire",
      description: "Tell us about your event."
    },
    {
      number: "02",
      title: "Customize",
      description: "We'll plan the drinks and details together."
    },
    {
      number: "03",
      title: "Celebrate",
      description: "Enjoy coffee and matcha with your guests."
    }
  ];

  return (
    <section className="booking-steps" id="events">
      <div className="booking-header">
        <p className="eyebrow">FOR YOUR NEXT GATHERING</p>
        <h2>
          Something special, <em>on the menu.</em>
        </h2>
        <p>From the first inquiry to the final pour, here's how it works.</p>
      </div>

      <div className="booking-grid">
        {/* We'll render our steps here */}
        {steps.map((step) => (
            <div className="booking-card" key={step.number}>
                <span className="booking-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        ))}
      </div>

      <div className="booking-cta">
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUuRInxARNvB_34J1NbBqRWHL4l51MJsjiUXxdrTqlhKURxw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
        >
          Inquire about your event ↗
        </a>
      </div>

    </section>
  );
}

export default BookingSteps;