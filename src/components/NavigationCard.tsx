interface NavigationCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick: () => void;
}

export default function NavigationCard({ 
  title, 
  description, 
  icon, 
  color, 
  onClick 
}: NavigationCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative bg-gradient-to-br ${color} backdrop-blur-sm border rounded-2xl p-6 sm:p-8 
        transition-all duration-300 hover:scale-105 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent
        text-left overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <div className="text-4xl sm:text-5xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
          {description}
        </p>

        {/* Arrow Indicator */}
        <div className="flex items-center gap-2 text-white/95 font-medium text-sm pt-2">
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Explore
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </button>
  );
}
