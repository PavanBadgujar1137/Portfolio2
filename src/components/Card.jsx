import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = (props) => {
  let project = props.project;
  let likedProjects = props.likedProjects;
  let setLikedProjects = props.setLikedProjects;

  function clickHandler() {
    //logic
    if (likedProjects.includes(project.id)) {
      //pehle se like hua pada tha
      setLikedProjects((prev) => prev.filter((cid) => cid !== project.id));
      toast.warning("like removed");
    } else {
      //pehle se like nahi hai ye project
      //insert karna h ye project liked projects me
      if (likedProjects.length === 0) {
        setLikedProjects([project.id]);
      } else {
        //non-empty pehle se
        setLikedProjects((prev) => [...prev, project.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={project.image.url} />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center"
        >
          <button onClick={clickHandler}>
            {likedProjects.includes(project.id) ? (
              <span>
                <FcLike fontSize="1.75rem" />
              </span>
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {project.title}
        </p>
        <p className="mt-2 text-white">
          {project.description.length > 100
            ? project.description.substr(0, 100) + "..."
            : project.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
