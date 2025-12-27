import NavigationHeader from "../components/nav-header";
import ContactGreeting from "../components/contact/ContactGreeting";
import ContactCard from "../components/contact/ContactCard";
import ContactFooter from "../components/contact/ContactFooter";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "../components/contact/ContactIcons";
import contactInfo from "../assets/data/contact-info.json";

export default function ContactPage() {
  return (
    <>
      <NavigationHeader />

      <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ContactGreeting />

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ContactCard
              href={`mailto:${contactInfo.email}`}
              icon={<EmailIcon />}
              title="Email"
              description="Send me a message"
              linkText={contactInfo.email}
              gradientColors="bg-gradient-to-br from-red-500 to-red-600"
            />

            <ContactCard
              href={contactInfo.linkedin}
              icon={<LinkedInIcon />}
              title="LinkedIn"
              description="Let's connect professionally"
              linkText="View Profile →"
              gradientColors="bg-gradient-to-br from-blue-600 to-blue-700"
              isExternal
            />

            <ContactCard
              href={contactInfo.github}
              icon={<GitHubIcon />}
              title="GitHub"
              description="Check out my code"
              linkText="View Repositories →"
              gradientColors="bg-gradient-to-br from-gray-700 to-gray-900"
              isExternal
            />
          </div>

          <ContactFooter />
        </div>
      </div>
    </>
  );
}