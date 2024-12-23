import React from "react";
import "./Portfolio.css";

/** Portfolio page component */
function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Projects that I've worked on in IT:</h1>
      <section className="The First Project">
        <h2>The First Project</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum non
          itaque perspiciatis ad eos quis placeat sed. Repellendus, hic
          laboriosam ducimus qui nobis dolorem accusamus incidunt dolor dolore
          eligendi?
        </p>
        <img src="" alt="Image of first project" className="fit-picture" />
      </section>

      <section className="The Second Project">
        <h2>The Second Project</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum non
          itaque perspiciatis ad eos quis placeat sed. Repellendus, hic
          laboriosam ducimus qui nobis dolorem accusamus incidunt dolor dolore
          eligendi?
        </p>
        <img src="" alt="Image of second project" className="fit-picture" />
      </section>

      <section className="The Third Project">
        <h2>The Third Project</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum non
          itaque perspiciatis ad eos quis placeat sed. Repellendus, hic
          laboriosam ducimus qui nobis dolorem accusamus incidunt dolor dolore
          eligendi?
        </p>
        <img
          src=""
          alt="Image of third project"
          className="fit-picture"
        />
      </section>
    </div>
  );
}

export default Portfolio;
