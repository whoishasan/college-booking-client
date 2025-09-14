import React from "react";

const CollegeCard = () => {
  const colleges = [
    {
      id: 1,
      name: "Notre Dame College",
      admissionDate: "June 2025",
      events: "Annual Fest, Debate",
      research: "AI, Robotics",
      sports: "Football, Cricket",
      image: "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg",
    },
    {
      id: 2,
      name: "B.M. Union School & College",
      admissionDate: "July 2025",
      events: "Cultural Week, Hackathon",
      research: "Data Science, Physics",
      sports: "Basketball, Badminton",
      image: "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg",
    },
    {
      id: 3,
      name: "Denver College",
      admissionDate: "August 2025",
      events: "Music Fest, Science Fair",
      research: "Biotech, Chemistry",
      sports: "Hockey, Tennis",
      image:
        "https://images.pexels.com/photos/1796720/pexels-photo-1796720.jpeg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Colleges</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="border rounded-xl shadow-md p-4 bg-white flex flex-col"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{college.name}</h3>
            <p className="text-sm">Admission: {college.admissionDate}</p>
            <p className="text-sm">Events: {college.events}</p>
            <p className="text-sm">Research: {college.research}</p>
            <p className="text-sm mb-4">Sports: {college.sports}</p>
            <button className="btn btn-primary mt-auto">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
