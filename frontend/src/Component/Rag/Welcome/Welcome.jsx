import React from "react";
import "./welcome.css";
import tree from "../../../public/tree.jpg";
export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to Our Website!</h1>
        <p>
          We connect individuals directly with certified recyclers to
          responsibly dispose of e-waste.
          <br />
          Join us in our mission to protect the environment and conserve
          resources for future generations.
        </p>

        <div className="change">
          <button className="solid" >Consumer</button>

          <button className="but">Ragpickers</button>
        </div>
      </div>
      <div className="welcome-image">
        <img
          src={tree}
          alt="Loading"
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
}
