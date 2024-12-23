import React from "react";
import "./About.css";

/** About page component */
function About() {
  return (
    <div className="about">
      <h1>
        When I'm not studying for certifications and at work, Im doing the
        following things:
      </h1>
      <section className="Running">
        <h2>Running</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum non
          itaque perspiciatis ad eos quis placeat sed. Repellendus, hic
          laboriosam ducimus qui nobis dolorem accusamus incidunt dolor dolore
          eligendi?
        </p>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/running-track-1667904802.jpg?crop=0.668xw:1.00xh;0.0714xw,0&resize=640:*"
          alt="Image of a man running"
          className="fit-picture"
        />
      </section>

      <section className="Drawing">
        <h2>Drawing</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum non
          itaque perspiciatis ad eos quis placeat sed. Repellendus, hic
          laboriosam ducimus qui nobis dolorem accusamus incidunt dolor dolore
          eligendi?
        </p>
        <img
          src="https://www.wikihow.com/images/thumb/6/6b/Draw-Step-21-Version-3.jpg/v4-460px-Draw-Step-21-Version-3.jpg.webp"
          alt="Image of an apple drawing"
          className="fit-picture"
        />
      </section>

      <section className="Lifting Weights">
        <h2>Lifting Weights</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum non
          itaque perspiciatis ad eos quis placeat sed. Repellendus, hic
          laboriosam ducimus qui nobis dolorem accusamus incidunt dolor dolore
          eligendi?
        </p>
        <img
          src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/05/weights.jpg"
          alt="Image of someone lifting a dumbell weight"
          className="fit-picture"
        />
      </section>
    </div>
  );
}

export default About;
