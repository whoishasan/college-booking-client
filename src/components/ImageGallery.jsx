import React from "react";

const ImageGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/4560150/pexels-photo-4560150.jpeg",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/901962/pexels-photo-901962.jpeg",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Image Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.url}
              alt={`Gallery ${item.id}`}
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
