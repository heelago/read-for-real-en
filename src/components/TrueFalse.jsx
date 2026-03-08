import ProtectedTextarea from "./ProtectedTextarea";

export default function TrueFalse({ question, answer, onAnswer }) {
  const value = answer?.value;
  const justification = answer?.justification || "";

  function selectValue(v) {
    onAnswer({ ...answer, value: v, justification });
  }

  function updateJustification(text) {
    onAnswer({ ...answer, value, justification: text });
  }

  return (
    <div>
      <h3 className="text-[17px] font-semibold text-bark leading-[1.75] mb-4">{question.question}</h3>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => selectValue(true)}
          className={`flex-1 py-3 rounded-xl border text-base font-medium cursor-pointer font-heebo transition-all ${
            value === true
              ? "bg-moss/10 border-moss text-bark"
              : "bg-parchment border-border text-bark-muted hover:bg-parchment-deep/50"
          }`}
        >
          True
        </button>
        <button
          onClick={() => selectValue(false)}
          className={`flex-1 py-3 rounded-xl border text-base font-medium cursor-pointer font-heebo transition-all ${
            value === false
              ? "bg-moss/10 border-moss text-bark"
              : "bg-parchment border-border text-bark-muted hover:bg-parchment-deep/50"
          }`}
        >
          False
        </button>
      </div>

      {value !== undefined && (
        <div className="animate-fade-in-fast">
          <p className="text-sm text-bark-muted mb-2">{question.explanationPrompt}</p>
          <ProtectedTextarea
            value={justification}
            onChange={(e) => updateJustification(e.target.value)}
            placeholder="Write your justification..."
            className="min-h-[80px]"
          />
        </div>
      )}
    </div>
  );
}
