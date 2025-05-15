import React from "react";
import Image from "next/image";

interface ContractProject {
  name: string;
  description: string;
  technologies: string[];
  icon: string;
}

const contractProjects: ContractProject[] = [
  {
    name: "Orin",
    description:
      "Built the production-ready Orin platform for creating and configuring custom AI Agents, including embedded chat and feedback widgets. Developed backend infrastructure for voice interaction, document lookup, and conversation memory.",
    technologies: ["Node.js", "Vapi", "OpenAI APIs", "Next.js"],
    icon: "/orin.png",
  },
  {
    name: "Simili",
    description:
      "Created a voice-based math tutor for middle schoolers. Implemented a Speech-To-Text → LLM → Text-To-Speech pipeline and a communication system for direct widget state manipulation.",
    technologies: [
      "OpenAI API",
      "Anthropic API",
      "Phaser.js",
      "Hume AI",
      "LiveKit",
    ],
    icon: "/simili.png",
  },
  {
    name: "CardStory",
    description:
      "Developed an innovative card game using phone camera for card detection and story generation. Added essential features including AR tracking, authentication, and story flow logic.",
    technologies: ["Unity", "iOS", "Maxst AR"],
    icon: "/cardstory.png",
  },
];

const ContractWork = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-md">
          Contract Work
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {contractProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={project.icon}
                  alt={project.name + " icon"}
                  width={48}
                  height={48}
                  className="object-contain h-12 w-12 rounded bg-gray-100 shadow"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2 flex items-center">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractWork;
