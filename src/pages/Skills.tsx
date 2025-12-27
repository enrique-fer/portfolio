import NavigationHeader from "../components/nav-header";
import SkillsSection from "../components/skills/SkillsSection";
import SkillsOverview from "../components/skills/SkillsOverview";
import skillsData from "../assets/data/skills-data.json";
import { categoryConfig } from "../utils/skillsConfig";
import type { Skill } from "../types/skills";

export default function SkillsPage() {
  const skills: Skill[] = skillsData;

  // Group skills by category
  const technicalSkills = skills.filter((skill) => skill.category === "technical");
  const hardSkills = skills.filter((skill) => skill.category === "hard");
  const softSkills = skills.filter((skill) => skill.category === "soft");

  // Calculate overview stats
  const expertCount = skills.filter((skill) => skill.level.toLowerCase() === "expert").length;
  const advancedCount = skills.filter((skill) => skill.level.toLowerCase() === "advanced").length;

  return (
    <>
      <NavigationHeader />

      <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              My <span className="text-[#1872A0]">Skills</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise, hard skills, and soft skills.
              Click on any card to see detailed information and proficiency level.
            </p>
          </div>

          {/* Skills Overview */}
          <SkillsOverview
            totalSkills={skills.length}
            technicalCount={technicalSkills.length}
            hardCount={hardSkills.length}
            softCount={softSkills.length}
            expertCount={expertCount}
            advancedCount={advancedCount}
          />

          {/* Technical Skills Section */}
          {technicalSkills.length > 0 && (
            <SkillsSection
              title={categoryConfig.technical.title}
              icon={categoryConfig.technical.icon}
              skills={technicalSkills}
              color={categoryConfig.technical.color}
            />
          )}

          {/* Hard Skills Section */}
          {hardSkills.length > 0 && (
            <SkillsSection
              title={categoryConfig.hard.title}
              icon={categoryConfig.hard.icon}
              skills={hardSkills}
              color={categoryConfig.hard.color}
            />
          )}

          {/* Soft Skills Section */}
          {softSkills.length > 0 && (
            <SkillsSection
              title={categoryConfig.soft.title}
              icon={categoryConfig.soft.icon}
              skills={softSkills}
              color={categoryConfig.soft.color}
            />
          )}
        </div>
      </div>
    </>
  );
}