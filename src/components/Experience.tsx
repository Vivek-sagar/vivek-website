import React from "react";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
  logo?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Chief Technology Officer",
    company: "Pine&Lime",
    period: "2024 - Present",
    description: [
      "Led the creation of PL Games team to expand product line by launching personalized games using Generative AI",
      "Built multiple games with 1000s of games created on the platform",
      "Created custom ComfyUI Stable Diffusion pipeline for high-quality stylized pet portraits",
      "Launched successful pet portrait product line with 100s of sales",
    ],
    technologies: [
      "TypeScript",
      "Wix",
      "Next.js",
      "ComfyUI",
      "Pixi.js",
      "Phaser.js",
    ],
    link: "https://whack-a-me.com",
    logo: "/vivek-website/pinelime.png",
  },
  {
    title: "Senior Software Engineer, Games",
    company: "Synthesis",
    period: "2021 - 2024",
    description: [
      "Built map-maker for students to design custom levels for Constellation game",
      "Implemented features like drag-select, undo and copy-paste",
      "Led game pod of engineers and artists to deliver launch title Proxima Atlas for new Synthesis Platform",
    ],
    technologies: ["TypeScript", "Pixi.js", "Colyseus", "Unity"],
    logo: "/vivek-website/synthesis.png",
  },
  {
    title: "Senior Computer Vision Engineer",
    company: "Osmo",
    period: "2018 - 2021",
    description: [
      "Led team of 6 CV Engineers based in India",
      "Built full stack for object detection across multiple games",
      "Designed and developed synthetic data pipeline using Unity",
      "Published at NeurIPS 2021 on Gamifying Math Education using Object Detection",
    ],
    technologies: [
      "Unity",
      "XCode",
      "Android Studio",
      "Python",
      "Pytorch",
      "Tensorflow",
    ],
    logo: "/vivek-website/osmo.png",
  },
  {
    title: "Software Engineer, Games",
    company: "Osmo",
    period: "2016 - 2018",
    description: [
      "Part of core team that built Coding Jam",
      "Pitched and led team to create Coding Duo",
      "Ported Osmo Vision SDK from iOS to Android",
    ],
    technologies: ["Unity", "iOS", "Android"],
    logo: "/vivek-website/osmo.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-md">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  {exp.logo && (
                    <div className="mb-2 flex justify-center md:justify-start">
                      {exp.company === "Osmo" ? (
                        <a
                          href="https://playosmo.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company + " logo"}
                            width={64}
                            height={64}
                            className="object-contain h-12 w-12 md:h-16 md:w-16 rounded mb-2 bg-white shadow"
                          />
                        </a>
                      ) : exp.company === "Synthesis" ? (
                        <a
                          href="https://synthesis.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company + " logo"}
                            width={64}
                            height={64}
                            className="object-contain h-12 w-12 md:h-16 md:w-16 rounded mb-2 bg-white shadow"
                          />
                        </a>
                      ) : exp.company === "Pine&Lime" ? (
                        <a
                          href="https://pinenlime.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company + " logo"}
                            width={64}
                            height={64}
                            className="object-contain h-12 w-12 md:h-16 md:w-16 rounded mb-2 bg-white shadow"
                          />
                        </a>
                      ) : (
                        <Image
                          src={exp.logo}
                          alt={exp.company + " logo"}
                          width={64}
                          height={64}
                          className="object-contain h-12 w-12 md:h-16 md:w-16 rounded mb-2 bg-white shadow"
                        />
                      )}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-blue-600">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {exp.company === "Pine&Lime" && (
                    <a
                      href="https://www.pinenlime.com/personalised-game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Try Whack-a-me →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
