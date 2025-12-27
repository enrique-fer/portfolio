interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  gradientColors: string;
  isExternal?: boolean;
}

export default function ContactCard({
  href,
  icon,
  title,
  description,
  linkText,
  gradientColors,
  isExternal = false,
}: ContactCardProps) {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:border-[#1872A0]/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-16 h-16 ${gradientColors} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <span className="text-[#1872A0] font-medium text-sm break-all px-2">
          {linkText}
        </span>
      </div>
    </a>
  );
}
