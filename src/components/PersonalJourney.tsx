import React from "react";
import Image from "next/image";

const PersonalJourney = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-md">
          Personal Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <Image
              src="/biketrip.png"
              alt="Cross-country cycling trip"
              width={640}
              height={360}
              className="rounded-lg shadow mb-6 w-full max-w-xl object-cover"
              priority
            />
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Cross-Country Cycling Adventure
            </h3>
            <p className="text-gray-700 mb-6">
              After completing my Master&apos;s program, I embarked on a
              transformative 2-month solo cycling journey across the United
              States, from San Francisco, CA to Durham, NC. This incredible
              experience not only tested my physical endurance but also provided
              a unique perspective on life and personal growth.
            </p>
            <a
              href="https://vivekvsagar.weebly.com/transam-2016.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Read the Journey Blog
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalJourney;
