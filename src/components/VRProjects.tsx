import React from "react";

interface VRProject {
  name: string;
  description: string;
  videoUrl: string;
  role: string;
}

const vrProjects: VRProject[] = [
  {
    name: "Bats",
    description:
      "An immersive VR experience that puts you in the perspective of a bat. Use your voice to echolocate and navigate through a cave while chasing bugs and avoiding obstacles.",
    videoUrl: "https://www.youtube.com/watch?v=r_BBjKMCwh8",
    role: "Primary Programmer - Shader and Gameplay Programming",
  },
  {
    name: "Garden",
    description:
      "A semester-long project developing a mixed reality experience using Google's Project Tango device and Durovis Dive headsets. The project utilized 3D world scanning to create virtual environments based on real-world spaces.",
    videoUrl: "https://www.youtube.com/watch?v=hUt4d0Ve_Og",
    role: "Developer",
  },
];

const VRProjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-md">
          Virtual & Mixed Reality Projects
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {vrProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={project.videoUrl.replace("watch?v=", "embed/")}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full min-h-[320px] aspect-[16/10]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-2">{project.role}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VRProjects;
