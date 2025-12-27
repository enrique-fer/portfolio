interface TypeBadgeProps {
  icon: string;
  label: string;
  bgColor: string;
  textColor: string;
}

export default function TypeBadge({ icon, label, bgColor, textColor }: TypeBadgeProps) {
  return (
    <div className="absolute -top-3 left-4">
      <span className={`px-3 py-1 ${bgColor} ${textColor} rounded-full text-xs font-semibold shadow-md flex items-center gap-1`}>
        <span>{icon}</span>
        <span>{label}</span>
      </span>
    </div>
  );
}
