interface ProfileImageProps {
  src: string;
  alt?: string;
}

export default function ProfileImage({ src }: ProfileImageProps) {
  return (
    <div className="relative flex-shrink-0">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1872A0] via-[#2089b8] to-[#1872A0] rounded-full blur-2xl opacity-20 animate-pulse"></div>

      {/* Image Container */}
      <div className="relative">
        {/* Decorative Circles Behind Main Circle - Lower z-index */}
        {/* Top Right Circle */}
        <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#1872A0]/40 bg-gradient-to-br from-[#2089b8]/20 to-[#1872A0]/30 backdrop-blur-sm animate-pulse z-0"></div>
        
        {/* Bottom Left Circle */}
        <div 
          className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#2089b8]/40 bg-gradient-to-br from-[#1872A0]/20 to-[#2089b8]/30 backdrop-blur-sm animate-pulse z-0" 
          style={{ animationDelay: '1s' }}
        ></div>
        
        {/* Small Accent Circle */}
        <div 
          className="absolute top-8 -left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-[#1872A0]/50 bg-gradient-to-br from-[#1872A0]/30 to-transparent animate-pulse z-0" 
          style={{ animationDelay: '0.5s' }}
        ></div>
        
        {/* Main Profile Image - On top */}
        <img
          src={src}
          className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-[#1872A0]/30 shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
