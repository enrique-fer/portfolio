interface SummaryPanelProps {
  summary: string;
}

export default function SummaryPanel({ summary }: SummaryPanelProps) {
  return (
    <div className="min-w-78 w-fit max-w-100 max-h-[300px] animate-slideIn">
      <div className="bg-[#1872A0]/5 border-2 border-[#1872A0]/30 rounded-2xl p-5">
        <h4 className="text-base font-bold text-[#1872A0] mb-2">
          Work Summary
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed min-w-78 w-fit max-w-100">{summary}</p>
      </div>
    </div>
  );
}
