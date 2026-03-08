import { ARTICLE } from "../data/article-content";

export default function Primer({ onComplete }) {
  return (
    <section className="animate-fade-in py-4 sm:py-6">
      <div className="rounded-2xl border border-border bg-cream shadow-sm p-5 sm:p-7 mb-6">
        <h2 className="font-heebo text-2xl sm:text-3xl font-bold text-bark mb-3">
          Before You Begin
        </h2>
        <p className="text-[15px] leading-[1.9] text-bark-muted mb-4">
          This article asks what changes when humanities scholarship becomes digital. Before diving in,
          we map the structure so your reading stays intentional rather than purely technical.
        </p>

        <div className="rounded-xl border border-border-light bg-parchment p-4 mb-5">
          <p className="text-xs font-semibold text-earth mb-1">Reading Unit: Week 2</p>
          <p className="text-sm text-earth mb-1" dir="ltr">
            {ARTICLE.author} ({ARTICLE.year})
          </p>
          <p className="font-semibold text-bark mb-1" dir="ltr">
            {ARTICLE.title}
          </p>
          <p className="text-xs text-muted" dir="ltr">
            {ARTICLE.source}
          </p>
        </div>

        <div className="rounded-xl border border-border-light bg-parchment p-4 mb-5">
          <h3 className="font-semibold text-bark mb-2">Reading Prompt</h3>
          <p className="text-sm leading-[1.85] text-bark-muted">
            Read slowly and track how the platform experience itself echoes Fitzpatrick's argument about
            the "digital difference."
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {ARTICLE.sections.map((part, idx) => (
            <article
              key={part.id}
              className="rounded-xl border border-border-light bg-parchment px-4 py-3"
            >
              <p className="text-xs text-earth mb-1">Part {idx + 1}</p>
              <h3 className="font-semibold text-bark text-[15px] mb-1">{part.title}</h3>
              <p className="text-xs text-muted mb-2">Pages {part.pages}</p>
              <p className="text-[14px] leading-[1.85] text-bark-muted">{part.summary}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onComplete}
          className="bg-moss hover:brightness-110 text-white border-none rounded-xl py-3.5 px-10 text-base font-medium cursor-pointer font-heebo transition-all"
        >
          Continue to Full Reading
        </button>
      </div>
    </section>
  );
}
