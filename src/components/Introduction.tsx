export default function Introduction() {
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
    </div>
  );
}
