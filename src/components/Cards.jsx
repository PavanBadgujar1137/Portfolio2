import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let projects = props.projects;
  let category = props.category;
  const [likedProjects, setLikedProjects] = useState([]);

  function getProjects() {
    if (category === "All") {
      let allProjects = [];
      Object.values(projects).forEach((array) => {
        array.forEach((courseData) => {
          allProjects.push(courseData);
        });
      });
      return allProjects;
    } else {
      //main sirf specific categiry ka data array krunga
      return projects[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getProjects().map((project) => (
        <Card
          key={project.id}
          project={project}
          likedProjects={likedProjects}
          setLikedProjects={setLikedProjects}
        />
      ))}
    </div>
  );
};

export default Cards;
