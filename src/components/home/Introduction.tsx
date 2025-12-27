import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 text-center lg:text-left flex-1">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        <span className="text-gray-800">Hi, I'm </span>
        <span className="text-[#1872A0]">Enrique</span>
      </h1>

      <div className="flex items-center gap-2">
        <p className="text-xl sm:text-2xl text-gray-700 font-light">
          Software Developer
        </p>
        <p className="text-base italic text-gray-700 font-light">
          (Full Stack | UX enthusiast)
        </p>
      </div>

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        I am active and curious, always eager to learn and challenge myself to grow both personally and professionally. From my work experience, I have developed the ability to understand different perspectives and extract the best from each to collaboratively achieve optimal solutions. Working on international projects where diverse cultures and working styles converge has taught me to find common ground, which has significantly broadened my perspective as a developer.
      </p>

      <div className="pt-4">
        <button
          onClick={() => navigate("/projects")}
          className="group bg-[#1872A0] hover:bg-[#155d85] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto lg:mx-0"
        >
          <span>View My Projects</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
