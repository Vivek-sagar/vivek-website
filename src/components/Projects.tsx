import React from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/project1.jpg",
    link: "#",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/project2.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A mobile-first responsive dashboard for data visualization.",
    technologies: ["React", "D3.js", "Material-UI"],
    image: "/project3.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                {/* Add actual project images here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
