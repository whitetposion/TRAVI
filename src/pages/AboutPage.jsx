import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to our travel website! We are proud to have received several awards and achievements in the travel industry. Our team is dedicated to providing exceptional travel experiences to our customers.
      </p>
      <h3>Awards and Achievements</h3>
      <ul>
        <li>Best Travel Agency of the Year</li>
        <li>Top-rated Customer Service</li>
        <li>Most Innovative Travel Packages</li>
      </ul>
      <h3>Travel Packages</h3>
      <p>
        We offer travel packages to various countries around the world. Explore the beauty and culture of these amazing destinations:
      </p>
      <ul>
        <li>Country 1</li>
        <li>Country 2</li>
        <li>Country 3</li>
        {/* Add more countries here */}
      </ul>
    </div>
  );
};
export default AboutPage
