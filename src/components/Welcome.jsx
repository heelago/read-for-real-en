import { ARTICLE } from "../data/article-content";
import { setStudentMeta } from "../utils/sessionLogger";
import { WelcomeIllustration } from "./SvgAssets";

export default function Welcome({ onComplete }) {
  function handleStart() {
    setStudentMeta(null);
    onComplete();
  }

  return (
    <div className="animate-fade-in py-8 sm:py-10">
      <div className="w-full max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden border border-border bg-parchment shadow-sm">
        <WelcomeIllustration />
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-cream shadow-sm px-5 sm:px-7 py-6 sm:py-8 text-left">
        <h2 className="font-heebo text-3xl sm:text-4xl font-bold text-bark mb-3">
          Slow Reading, Deeper Thinking
        </h2>
        <p className="text-bark-light text-[15px] leading-[1.9] mb-4">
          This companion supports close, reflective reading in digital humanities. In a world of instant summaries,
          the goal here is to return attention to the text and to your own reasoning process.
        </p>
        <p className="text-sm text-earth mb-1" dir="ltr">
          {ARTICLE.author} ({ARTICLE.year}). {ARTICLE.title}
        </p>
        <p className="text-xs text-muted mb-6" dir="ltr">
          {ARTICLE.source}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-5">
          <article className="rounded-xl border border-border-light bg-parchment p-4">
            <h3 className="font-semibold text-bark mb-2">Active Reading</h3>
            <p className="text-sm leading-[1.85] text-bark-muted">
              Reading is intentionally non-linear. Throughout the text, you pause, reflect, and write your own response.
            </p>
          </article>
          <article className="rounded-xl border border-border-light bg-parchment p-4">
            <h3 className="font-semibold text-bark mb-2">Intentional Friction</h3>
            <p className="text-sm leading-[1.85] text-bark-muted">
              Copy-paste is blocked by design. Manual writing is not a technical limitation; it is part of the learning method.
            </p>
          </article>
        </div>

        <div className="rounded-xl border border-border-light bg-parchment p-4 mb-6">
          <h3 className="font-semibold text-bark mb-2">Focused Experience</h3>
          <p className="text-sm leading-[1.85] text-bark-muted mb-3">
            A minimal interface keeps the article central, with inline concepts, guided prompts, and a short quiz to reinforce understanding.
          </p>
          <h4 className="font-semibold text-bark text-sm mb-1">How It Works</h4>
          <ol className="list-decimal pl-5 text-sm leading-[1.9] text-bark-muted space-y-1">
            <li>Start with a short primer to orient your reading.</li>
            <li>Read section by section with embedded conceptual checkpoints.</li>
            <li>Answer Socratic prompts across three phases: identify, interpret, critique.</li>
            <li>Complete a short quiz for factual and conceptual understanding.</li>
            <li>Download or print a final report (HTML/PDF).</li>
          </ol>
        </div>

        <button
          type="button"
          onClick={handleStart}
          className="w-full bg-moss hover:brightness-110 text-white border-none rounded-xl py-3.5 text-base font-medium cursor-pointer font-heebo transition-all mt-1 flex items-center justify-center gap-2"
        >
          <span>Start Reading</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
