import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import ExperienceIcon from "../../assets/icons/ExperienceIcon";
import EducationIcon from "../../assets/icons/EducationIcon";
import ContactIcon from "../../assets/icons/ContactIcon";
import SkillsIcon from "../../assets/icons/SkillsIcon";

export default function NavigationHeader({
  showName = true,
}: {
  showName?: boolean;
}) {
  return (
    <div className="fixed top-4 flex justify-center w-full z-100">
      <div className="w-[96vw] flex justify-between items-start">
        {showName ? (
          <div className="flex flex-col gap-2">
            <div className="font-lg font-bold text-white px-6 py-1 bg-[#1872A0] rounded-full">
              <span>Enrique Fernández Santiago</span>
            </div>
            <div className="font-md italic px-6 border border-[4px] border-[#1872A0] bg-[#f9fafb] w-fit rounded-full">
              <span>Software Developer</span>
            </div>
          </div>
        ) : <div></div>}
        <div className="flex gap-4 px-6 py-2 border border-[4px] border-[#1872A0] h-[36px] bg-[#f9fafb] rounded-full items-center">
          <Link to="/" title="Home">
            <HomeIcon />
          </Link>
          <Link to="/education" title="Education">
            <EducationIcon  />
          </Link>
          <Link to="/experience" title="Experience">
            <ExperienceIcon  />
          </Link>
          <Link to="/skills" title="Skills">
            <SkillsIcon  />
          </Link>
          <Link to="/contact" title="Contact">
            <ContactIcon  />
          </Link>
        </div>
      </div>
    </div>
  );
}
