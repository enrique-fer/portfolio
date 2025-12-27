interface TimelineLineProps {
  isLast: boolean;
}

export default function TimelineLine({ isLast }: TimelineLineProps) {
  return (
    <div className="absolute left-1/2 top-2 bottom-2 w-0.5 bg-[#1872A0] -translate-x-1/2">
      {isLast && (
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-b from-[#1872A0] to-transparent"></div>
      )}
    </div>
  );
}
