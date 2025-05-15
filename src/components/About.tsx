import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            I&apos;m a passionate developer with a keen eye for creating elegant
            solutions to complex problems. With expertise in modern web
            technologies, I strive to build applications that are not only
            functional but also provide an exceptional user experience.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My journey in software development has equipped me with a diverse
            skill set and a deep understanding of both front-end and back-end
            technologies. I&apos;m constantly learning and exploring new
            technologies to stay at the forefront of web development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-500">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-500">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-500">30+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-500">15+</h3>
              <p className="text-gray-600">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
