import React, { useState } from "react";

function Achievement() {
  const [achievements] = useState([
    { title: "Experience", icon: "briefcase", description: "0 Year" },
    { title: "Completed", icon: "checkmark-circle", description: "2 Projects" },
  ]);

  return (
    <div className="achievement u-mb-medium">
      {achievements.map((ach, index) => (
        <div className="achievement__box u-center-text" key={index}>
          {/* <img
            className="achievement__icon"
            src={`./images/${ach.icon}-outline.svg`}
            alt="icon"
          /> */}
          <ion-icon class="achievement__icon" name={ach.icon}></ion-icon>
          <p className="achievement__title">{ach.title}</p>
          <p className="achievement__detail">{ach.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievement;