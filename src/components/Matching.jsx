import { useState } from "react";

export default function Matching({ question, matches, onMatch }) {
  const { pairs } = question;
  const isTouchDevice = "ontouchstart" in window;

  const [draggedTerm, setDraggedTerm] = useState(null);

  function handleDropdownChange(termIdx, matchIdx) {
    const next = [...matches];
    const prevHolder = next.indexOf(matchIdx);
    if (prevHolder !== -1) next[prevHolder] = null;
    next[termIdx] = matchIdx;
    onMatch(next);
  }

  function handleDragStart(termIdx) {
    setDraggedTerm(termIdx);
  }

  function handleDrop(matchIdx) {
    if (draggedTerm === null) return;
    const next = [...matches];
    const prevHolder = next.indexOf(matchIdx);
    if (prevHolder !== -1) next[prevHolder] = null;
    next[draggedTerm] = matchIdx;
    onMatch(next);
    setDraggedTerm(null);
  }

  function clearMatch(termIdx) {
    const next = [...matches];
    next[termIdx] = null;
    onMatch(next);
  }

  if (isTouchDevice) {
    return (
      <div>
        <h3 className="text-[17px] font-semibold text-bark leading-[1.75] mb-4">{question.question}</h3>
        <div className="space-y-4">
          {pairs.map((pair, termIdx) => (
            <div key={termIdx} className="bg-parchment border border-border rounded-xl p-4">
              <p className="font-semibold text-bark text-[15px] mb-2">{pair.term}</p>
              <select
                value={matches[termIdx] ?? ""}
                onChange={(e) =>
                  handleDropdownChange(
                    termIdx,
                    e.target.value === "" ? null : parseInt(e.target.value, 10)
                  )
                }
                className="w-full border border-border-light rounded-lg px-3 py-2.5 text-sm bg-cream text-bark font-heebo focus:outline-none focus:ring-2 focus:ring-moss"
                dir="ltr"
              >
                <option value="">- Select an answer -</option>
                {pairs.map((p, matchIdx) => (
                  <option key={matchIdx} value={matchIdx}>
                    {p.match}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-[17px] font-semibold text-bark leading-[1.75] mb-2">{question.question}</h3>
      <p className="text-sm text-earth mb-4">Drag each term to its matching description.</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs text-earth font-semibold mb-1">Terms</p>
          {pairs.map((pair, termIdx) => (
            <div
              key={termIdx}
              draggable
              onDragStart={() => handleDragStart(termIdx)}
              onDragEnd={() => setDraggedTerm(null)}
              className={`bg-parchment border border-border rounded-lg px-3 py-2.5 cursor-grab text-sm font-medium text-bark transition-all ${
                draggedTerm === termIdx ? "opacity-50 scale-95" : ""
              } ${matches[termIdx] !== null ? "border-moss bg-moss/5" : ""}`}
            >
              {pair.term}
              {matches[termIdx] !== null && (
                <button
                  onClick={() => clearMatch(termIdx)}
                  className="float-right text-muted text-xs cursor-pointer bg-transparent border-none font-heebo hover:text-bark"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-xs text-earth font-semibold mb-1">Definitions</p>
          {pairs.map((pair, matchIdx) => {
            const assignedBy = matches.indexOf(matchIdx);
            return (
              <div
                key={matchIdx}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(matchIdx)}
                className={`border border-dashed rounded-lg px-3 py-2.5 text-sm leading-[1.6] transition-all min-h-[44px] ${
                  assignedBy !== -1
                    ? "bg-moss/5 border-moss text-bark-light"
                    : "bg-white/50 border-border text-bark-muted"
                }`}
              >
                {pair.match}
                {assignedBy !== -1 && (
                  <span className="block text-xs text-moss font-medium mt-1">← {pairs[assignedBy].term}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
