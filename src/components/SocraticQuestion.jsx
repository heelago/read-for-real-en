import { useState, useRef } from "react";
import { PHASES } from "../data/article-content";
import { logStructuredAnswer } from "../utils/sessionLogger";
import { QuestionConnector, FrictionIcon, PhaseIcon } from "./SvgAssets";
import { Check } from "lucide-react";

const MIN_CHARS = 50;

export default function SocraticQuestion({ question, answer, onAnswer, showFrictionBanner }) {
  const [showHint, setShowHint] = useState(false);
  const [localAnswer, setLocalAnswer] = useState(answer || "");
  const [submitted, setSubmitted] = useState(!!answer);
  const [shake, setShake] = useState(false);
  const taRef = useRef(null);

  const phase = PHASES[question.phase];
  const charCount = localAnswer.length;
  const canSubmit = charCount >= MIN_CHARS;

  function handleSubmit() {
    logStructuredAnswer(question.id, localAnswer);
    setSubmitted(true);
    onAnswer(localAnswer);
  }

  return (
    <div className="my-2">
      <QuestionConnector />

      <div
        className="socratic-question-block rounded border border-border bg-parchment relative px-5 py-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
        style={{ borderLeftWidth: 4, borderLeftColor: phase.color }}
      >
        <div
          className="absolute -top-3.5 left-4 bg-parchment px-1.5"
          style={{ color: phase.color }}
        >
          <PhaseIcon phase={question.phase} size={22} />
        </div>

        {showFrictionBanner && (
          <div
            className={`friction-banner bg-parchment-deep border border-border rounded px-4 py-3 mb-4 text-[13.5px] text-bark-light flex items-start gap-3 ${shake ? "animate-shake" : ""}`}
          >
            <FrictionIcon />
            <span className="flex-1 leading-snug">
              <strong>Manual writing only.</strong> This friction is part of the learning process, so copy-paste is disabled.
            </span>
          </div>
        )}

        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2 text-bark">Think Through This:</h3>
          <p className="text-bark leading-relaxed mb-3">{question.question}</p>
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-earth cursor-pointer bg-transparent border-none font-heebo underline decoration-dotted hover:text-bark-muted transition-colors p-0 mb-2"
          >
            {showHint ? "Hide hint" : "Need a hint?"}
          </button>
          {showHint && (
            <div className="flex items-start gap-2 bg-parchment p-3 rounded text-sm text-bark-light border border-border animate-fade-in-fast">
              <span className="text-earth mt-0.5 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <span>
                <strong>Hint:</strong> {question.hint}
              </span>
            </div>
          )}
        </div>

        {submitted ? (
          <div
            className="rounded px-4 py-3 text-[15px] leading-[1.8] text-bark whitespace-pre-wrap bg-parchment-deep"
            style={{ borderLeft: `3px solid ${phase.color}` }}
          >
            {localAnswer}
          </div>
        ) : (
          <>
            <textarea
              ref={taRef}
              value={localAnswer}
              onChange={(e) => setLocalAnswer(e.target.value)}
              onPaste={(e) => {
                e.preventDefault();
                setShake(true);
                setTimeout(() => setShake(false), 400);
              }}
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onDrop={(e) => e.preventDefault()}
              onDragOver={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && ["v", "V", "c", "C"].includes(e.key)) {
                  e.preventDefault();
                  setShake(true);
                  setTimeout(() => setShake(false), 400);
                }
              }}
              placeholder="Write your response here..."
              autoComplete="off"
              spellCheck={false}
              className="protected-textarea w-full min-h-[120px] border border-border-light rounded p-3.5 text-[15px] leading-[1.75] font-heebo resize-y bg-cream text-bark focus:outline-none transition-colors"
              style={{ "--focus-color": phase.color }}
              dir="ltr"
            />

            <div className="flex justify-between items-center mt-3 px-1">
              <span
                className={`text-xs font-medium transition-colors ${
                  charCount >= MIN_CHARS ? "text-moss" : "text-muted"
                }`}
              >
                {charCount}/{MIN_CHARS} characters
              </span>
              {canSubmit ? (
                <button
                  onClick={handleSubmit}
                  className="border-none rounded px-6 py-2 text-sm font-semibold cursor-pointer font-heebo text-white transition-colors flex items-center gap-1"
                  style={{ background: phase.color }}
                >
                  <Check size={14} />
                  Submit
                </button>
              ) : (
                <span className="text-xs text-muted">{MIN_CHARS - charCount} more characters</span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
