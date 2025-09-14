import React from "react";

const ResearchPapers = () => {
  const papers = [
    {
      id: 1,
      title: "AI and Machine Learning in Education",
      author: "John Doe",
      link: "https://example.com/research1",
    },
    {
      id: 2,
      title: "Blockchain for Secure Academic Records",
      author: "Jane Smith",
      link: "https://example.com/research2",
    },
    {
      id: 3,
      title: "Data Science for Social Good",
      author: "Michael Johnson",
      link: "https://example.com/research3",
    },
    {
      id: 4,
      title: "Sustainable Energy Research in Universities",
      author: "Sarah Lee",
      link: "https://example.com/research4",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Research Papers by Students
      </h2>

      <ul className="space-y-4">
        {papers.map((paper) => (
          <li
            key={paper.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{paper.title}</h3>
            <p className="text-sm text-gray-600">By {paper.author}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Paper →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPapers;
