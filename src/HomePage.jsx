import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Top Navbar */}
      <div className="navbar">
        <div className="profile-icon">
          <img  src="./src/assets/profile-icon.png" alt="Lawson Profile Cartoon" />
        </div>
        <div className="name-container">
          <h1 className="silkscreenRegular">Hi! I'm Michelle Lawson 🌸</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Images */}
        <div className="left-images">
          <div className="image-container">
            <img src="./src/assets/comp-girl-pink.png" alt="Projects" />
            <div className="image-text">Projects</div>
          </div>
          <div className="image-container">
            <img src="./src/assets/writing-img.jpg" alt="Writing" />
            <div className="image-text">Writing</div>
          </div>
        </div>

        {/* Center Image */}
        <div className="center-image">
          {/* Replace this with your center image */}
          <img src="https://i.pinimg.com/originals/6f/85/9a/6f859a720b212902ebc000bfeac65a82.jpg" alt="Illustration of a young woman smiling" />
          <div className="bottom-text-bar">
            {/* Replace this with your desired text */}
            <p>This is the bottom text bar.</p>
            </div>
        </div>

        {/* Right Images */}
        <div className="right-images">
          <div className="image-container">
            <img src="./src/assets/michelle-pink.jpeg" alt="Content" />
            <div className="image-text">Content</div>
          </div>
          <div className="image-container">
            <img src="./src/assets/cat-girl.png" alt="Contact" />
            <div className="image-text">Speaking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;