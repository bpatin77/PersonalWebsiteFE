import React from "react";
import "./Home.css";

/** Home page component */
function Home() {
    return (
      <div className="home">
        <h1>Developer</h1>
        <p>
          Interested in the web/software development field so I can apply my
          problem solving skills to improve upon existing code and build
          websites for future employers.
        </p>

        <img
          src="https://i.postimg.cc/xd9Qt32Y/Screenshot-20241218-160034-Gallery.jpg"
          alt="Blake Patin"
          className="blake-patin-image"
        />

        <p>
          "The Windshield is bigger than the rearview mirror for a reason"
          -Jelly Roll
        </p>
      </div>
    );
}

export default Home;