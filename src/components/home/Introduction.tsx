import { useNavigate } from "react-router-dom";
import cvLink from "../../assets/data/cv-link.json";

export default function Introduction() {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    window.open(cvLink.cvUrl, "_blank");
  };

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
        (TBD) I create beautiful, functional, and user-centered digital experiences. Passionate about crafting code and bringing ideas to life.
      </p>

      <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
        <button
          onClick={() => navigate("/projects")}
          className="group bg-[#1872A0] hover:bg-[#155d85] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
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

        <button
          onClick={handleDownloadCV}
          className="group bg-white hover:bg-gray-50 text-[#1872A0] font-semibold px-8 py-3 rounded-full border-2 border-[#1872A0] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
          <svg
            className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Download CV</span>
        </button>
      </div>
    </div>
  );
}
