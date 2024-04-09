import React from "react";
import HeaderProject from "./HeaderProject";
import Filter from "./Filter";
import Cards from "./Cards";

import { data } from "../data";
import { filterData } from "../data";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const Projects1 = () => {
  const [projects, setProjects] = useState(data);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      setProjects(data);
    } catch (error) {
      toast.error("Data Ane me koi dikkat he ");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  });
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <HeaderProject />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
        >
          {loading ? (
            <Spinner />
          ) : (
            <Cards projects={projects} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects1;
