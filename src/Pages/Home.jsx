import React from "react";
import CollegeCard from "../components/CollegeCard";
import ImageGallery from "../components/ImageGallery";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <input
        type="text"
        placeholder="Search for a College"
        className="input w-3/4 border-black py-6 px-4 font-semibold border-2"
      />
      <div>
        <CollegeCard></CollegeCard>
      </div>
      <div>
        <ImageGallery></ImageGallery>
      </div>
    </div>
  );
};

export default Home;
