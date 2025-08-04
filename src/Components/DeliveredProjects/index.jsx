import React from 'react';

const projects = [
  {
    // title: 'Coastal Boutique',
    // tag: 'Commercial Interior Design',
    image: 'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg',
  },
  {
    // title: 'Workspace Makeover',
    // tag: 'Residential Interior Design',
    image: 'src/assets/Images/Images/23db353a-c8ba-40c1-ae45-0b76169c6956(1).JPG',
  },
  {
    // title: 'Interior Styling',
    // tag: 'Interior Styling',
    image: 'https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg',
  },
  {
    // title: 'Living Revival',
    // tag: 'Renovation & Remodeling',
    image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
  },
];

const DeliveredProjects = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Title */}
      <div className="mb-10">
        <p className="text-white/70 text-[30px] mb-1">Projects</p>
        <h1 className="text-4xl md:text-6xl font-semibold">We&apos;ve Delivered</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            {/* Tag */}
            <div className="absolute top-3 left-3 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm text-white font-medium">
              {project.tag}
            </div>
            {/* Title */}
            <div className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveredProjects;
