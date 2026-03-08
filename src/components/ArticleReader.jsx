import { useEffect, useState } from "react";
import { ARTICLE_TEXT } from "../data/article-data";
import {
  SECTION_FLOWS,
  SECTION_ORDER,
  INLINE_QUESTIONS,
} from "../data/reading-flow";
import { SECTION_BRIEFS } from "../data/section-briefs";
import SectionHeader from "./SectionHeader";
import ArticleParagraph from "./ArticleParagraph";
import InlineConceptCard from "./InlineConceptCard";
import SocraticQuestion from "./SocraticQuestion";

export default function ArticleReader({ onComplete }) {
  const [answers, setAnswers] = useState({});
  const [sectionIndex, setSectionIndex] = useState(0);

  function handleAnswer(questionId, answer) {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sectionIndex]);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = INLINE_QUESTIONS.length;
  const totalSections = SECTION_ORDER.length;
  const sectionKey = SECTION_ORDER[sectionIndex];
  const section = ARTICLE_TEXT.sections[sectionKey];
  const flow = SECTION_FLOWS[sectionKey];
  const sectionBrief = SECTION_BRIEFS[sectionKey];

  if (!section || !flow) return null;

  const paragraphMap = {};
  section.paragraphs.forEach((p) => {
    paragraphMap[p.id] = p;
  });

  return (
    <div className="animate-fade-in mt-4">
      <div className="mb-8 text-center article-reader-intro">
        <p className="text-sm text-earth leading-relaxed" dir="ltr">
          {ARTICLE_TEXT.attribution.citationFull}
        </p>
      </div>

      <div className="rounded-xl border border-border bg-parchment px-4 py-2 mb-5 text-sm text-bark-muted">
        Part {sectionIndex + 1} of {totalSections}
      </div>

      <div className="section-shell mb-8">
        <SectionHeader section={section} />
        {sectionBrief && (
          <p className="section-brief text-[15px] leading-[1.95] text-bark-muted text-left mb-5">
            {sectionBrief}
          </p>
        )}

        <div className="section-shell-body">
          {flow.map((item) => {
            if (item.type === "paragraph") {
              const para = paragraphMap[item.id];
              if (!para) return null;
              return <ArticleParagraph key={item.id} paragraph={para} sectionId={sectionKey} />;
            }

            if (item.type === "concept") {
              return (
                <InlineConceptCard
                  key={`concept-${item.conceptId}`}
                  conceptId={item.conceptId}
                />
              );
            }

            if (item.type === "question") {
              const question = INLINE_QUESTIONS.find((q) => q.id === item.questionId);
              if (!question) return null;

              return (
                <SocraticQuestion
                  key={`question-${item.questionId}`}
                  question={question}
                  answer={answers[item.questionId]}
                  onAnswer={(ans) => handleAnswer(item.questionId, ans)}
                  showFrictionBanner={item.questionId === INLINE_QUESTIONS[0]?.id}
                />
              );
            }

            return null;
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mb-10">
        <button
          type="button"
          onClick={() => setSectionIndex((prev) => Math.max(prev - 1, 0))}
          disabled={sectionIndex === 0}
          className="px-4 py-2.5 rounded-lg border border-border bg-cream text-bark disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Back
        </button>

        {sectionIndex < totalSections - 1 ? (
          <button
            type="button"
            onClick={() => setSectionIndex((prev) => Math.min(prev + 1, totalSections - 1))}
            className="bg-moss hover:brightness-110 text-white border-none rounded-lg py-2.5 px-6 text-sm font-medium cursor-pointer font-heebo transition-all"
          >
            Next Section
          </button>
        ) : (
          <button
            onClick={() => onComplete(answers)}
            className="bg-moss hover:brightness-110 text-white border-none rounded-lg py-2.5 px-6 text-sm font-medium cursor-pointer font-heebo transition-all"
          >
            Finish Reading and Start Quiz
          </button>
        )}
      </div>

      <div className="text-center border-t border-border pt-8">
        <p className="text-bark-muted text-sm mb-2">
          You answered <span className="font-bold text-moss">{answeredCount}</span> out of{" "}
          <span className="font-bold">{totalQuestions}</span> questions
        </p>
        {answeredCount < totalQuestions && (
          <p className="text-xs text-muted">Unanswered prompts will not appear in your report.</p>
        )}
      </div>
    </div>
  );
}
