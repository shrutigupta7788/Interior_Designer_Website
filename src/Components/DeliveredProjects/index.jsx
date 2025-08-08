import React from 'react';

const projects = [
  {
    title: 'Corporate',
    tag: 'Love your Work, all the more  ',
    image: 'http://www.enzointernational.in/assets/img/projects/corporate.jpg',
  },
  {
    title: 'Hospitality',
    tag: 'For a royal service',
    image: 'http://www.enzointernational.in/assets/img/projects/hospitality.jpg',
  },
  {
    title: 'Residential',
    tag: 'Come home to an experience',
    image: 'http://www.enzointernational.in/assets/img/projects/residential.jpg',
  },
  {
    title: 'Retail',
    tag: 'Where buying is an experience',
    image: 'http://www.enzointernational.in/assets/img/projects/retail.jpg',
  },
];

const DeliveredProjects = () => {
  return (
    <div className=" min-h-screen bg-black text-white !px-50 py-10">
      {/* Title */}
      <div className="mb-10">
        <p className="text-white/70 text-[30px] mb-1">Projects</p>
        <h1 className="text-4xl md:text-6xl font-semibold">We&apos;ve Delivered</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group shadow-lg "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            {/* Tag */}
            <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur px-3 py-1 rounded-md text-[15px] text-black font-[600]">
              {project.tag}
            </div>
            {/* Title */}
            <div className="absolute bottom-3 left-3 text-white font-[600] text-[22px] drop-shadow">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveredProjects;
