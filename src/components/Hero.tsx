import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/banner.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-gray-900/80" />
      </div>
      <div className="container mx-auto px-4 py-16 text-center relative z-10 flex flex-col min-h-screen justify-center">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Hi, I&apos;m{" "}
            <span className="text-blue-400">Vivek Vidyasagaran</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow">
            A technology leader and engineer passionate about building
            innovative experiences
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#experience"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors shadow-lg"
            >
              View Experience
            </a>
          </div>
        </div>
        {/* Email and Socials at the bottom */}
        <div className="flex flex-col items-center gap-3 mt-12 mb-2">
          <a
            href="mailto:vivek.v.sagar@gmail.com"
            className="inline-block text-lg text-blue-200 hover:text-blue-400 font-mono underline underline-offset-4 transition-colors"
          >
            vivek.v.sagar@gmail.com
          </a>
          <div className="flex gap-4 mt-1">
            <a
              href="https://x.com/coziestsoup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-blue-500 text-white p-2 rounded-full transition-colors shadow flex items-center justify-center"
              aria-label="Twitter"
            >
              {/* X (Twitter) Logo */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.53 3H21.5L14.36 10.87L22.75 21H16.16L11.06 14.78L5.36 21H1.36L8.91 12.62L1 3H7.75L12.36 8.67L17.53 3ZM16.34 19H18.34L7.75 5H5.59L16.34 19Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-vidyasagaran-12168277/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-blue-700 text-white p-2 rounded-full transition-colors shadow flex items-center justify-center"
              aria-label="LinkedIn"
            >
              {/* LinkedIn Logo */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
