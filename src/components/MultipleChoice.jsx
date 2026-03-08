export default function MultipleChoice({ question, selected, onSelect }) {
  return (
    <div className="space-y-2.5">
      <h3 className="text-[17px] font-semibold text-bark leading-[1.75] mb-4">{question.question}</h3>
      {question.options.map((option, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`w-full text-left px-4 py-3 rounded-xl border transition-all cursor-pointer font-heebo text-[15px] leading-[1.7] ${
            selected === i
              ? "bg-moss/10 border-moss text-bark font-medium"
              : "bg-parchment border-border text-bark-light hover:bg-parchment-deep/50"
          }`}
        >
          <span
            className="inline-block w-6 h-6 rounded-full border-2 mr-3 align-middle text-center text-xs leading-[22px] font-semibold"
            style={{
              borderColor: selected === i ? "#6b7c5b" : "#ddd8cc",
              background: selected === i ? "#6b7c5b" : "transparent",
              color: selected === i ? "white" : "#8a7d6b",
            }}
          >
            {String.fromCharCode(65 + i)}
          </span>
          {option}
        </button>
      ))}
    </div>
  );
}
