import React from "react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Transform your business from physical to digital",
      description:
        "Migrate your business to an online platform and reach more customers.",
    },
    {
      id: 2,
      title: "Optimize web applications",
      description:
        "Improve the performance and user experience of your web applications.",
    },
    {
      id: 3,
      title: "Analyze web traffic data",
      description:
        "Gain insights into your website's visitors and make data-driven decisions.",
    },
    {
      id: 4,
      title: "Perform strategies and marketing support",
      description:
        "Develop and implement effective marketing strategies for your business.",
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;