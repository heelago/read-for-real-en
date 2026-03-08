import { useState } from "react";
import { QUIZ } from "../data/quiz-data";
import { logQuizAnswer, setQuizScore } from "../utils/sessionLogger";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import Matching from "./Matching";

export default function Quiz({ onComplete }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const total = QUIZ.length;
  const q = QUIZ[currentQ];

  function setAnswer(questionId, value) {
    setAnswers({ ...answers, [questionId]: value });
    logQuizAnswer(questionId, value);
  }

  function canProceed() {
    const ans = answers[q.id];
    if (ans === undefined || ans === null) return false;
    if (q.type === "true_false") {
      return ans.value !== undefined && ans.justification?.trim();
    }
    if (q.type === "matching") {
      return ans.every((m) => m !== null);
    }
    return true;
  }

  function handleNext() {
    if (currentQ < total - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      let correct = 0;
      QUIZ.forEach((question) => {
        const ans = answers[question.id];
        if (!ans && ans !== 0) return;

        if (question.type === "multiple_choice") {
          if (ans === question.correct) correct++;
        } else if (question.type === "true_false") {
          if (ans.value === question.correct) correct++;
        } else if (question.type === "matching") {
          if (ans.every((matchIdx, termIdx) => matchIdx === termIdx)) {
            correct++;
          }
        }
      });

      setQuizScore({ correct, total });
      onComplete({ correct, total });
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6 pb-3.5 border-b border-border">
        <p className="text-[13px] text-earth m-0">
          <span className="font-semibold text-moss">Quick Quiz</span> · Question {currentQ + 1} of {total}
        </p>
      </div>

      <div className="flex gap-1 mb-7">
        {QUIZ.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-sm transition-colors duration-300"
            style={{
              background: i < currentQ ? "#6b7c5b" : i === currentQ ? "#5b6b7c" : "#ddd8cc",
            }}
          />
        ))}
      </div>

      <p className="text-xs text-muted mb-4">p. {q.page} in the article</p>

      {q.type === "multiple_choice" && (
        <MultipleChoice
          question={q}
          selected={answers[q.id]}
          onSelect={(i) => setAnswer(q.id, i)}
        />
      )}

      {q.type === "true_false" && (
        <TrueFalse question={q} answer={answers[q.id]} onAnswer={(ans) => setAnswer(q.id, ans)} />
      )}

      {q.type === "matching" && (
        <Matching
          question={q}
          matches={answers[q.id] || Array(q.pairs.length).fill(null)}
          onMatch={(m) => setAnswer(q.id, m)}
        />
      )}

      <div className="flex gap-2.5 mt-6">
        {currentQ > 0 && (
          <button
            onClick={() => setCurrentQ(currentQ - 1)}
            className="bg-transparent border border-border-light rounded-lg px-5 py-2 text-sm cursor-pointer text-bark-muted font-heebo hover:bg-parchment-deep/50 transition-colors"
          >
            &lt; Previous
          </button>
        )}
        <button
          disabled={!canProceed()}
          onClick={handleNext}
          className="border-none rounded-lg px-7 py-2.5 text-[15px] font-semibold cursor-pointer font-heebo text-white transition-colors"
          style={{
            background: canProceed() ? "#6b7c5b" : "#ccc",
            cursor: canProceed() ? "pointer" : "default",
          }}
        >
          {currentQ < total - 1 ? "Next >" : "Finish Quiz >"}
        </button>
      </div>
    </div>
  );
}
