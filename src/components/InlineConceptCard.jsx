import { useState } from "react";
import { ARTICLE } from "../data/article-content";
import { logConceptViewed } from "../utils/sessionLogger";
import { KeyRound } from "lucide-react";

export default function InlineConceptCard({ conceptId }) {
  const [open, setOpen] = useState(false);
  const concept = ARTICLE.keyConcepts.find((c) => c.id === conceptId);
  if (!concept) return null;

  function toggle() {
    if (!open) logConceptViewed(concept.id);
    setOpen(!open);
  }

  return (
    <div className="my-5">
      <div
        onClick={toggle}
        className={`rounded-xl border cursor-pointer transition-all ${
          open
            ? "bg-moss/5 border-moss/30"
            : "bg-parchment border-border hover:border-moss/30"
        } px-5 py-3.5`}
      >
        <div className="flex items-center gap-2">
          <KeyRound size={14} className="text-moss flex-shrink-0" />
          <span className="font-bold text-bark text-[15px]">{concept.term}</span>
          <span
            className="text-earth text-sm ml-auto transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "" }}
          >
            ▾
          </span>
        </div>

        {open && (
          <div
            className="mt-3 pt-3 border-t border-moss/15 animate-fade-in-fast"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm leading-[1.8] text-bark-light m-0">{concept.definition}</p>
            <span className="text-xs text-muted mt-2 inline-block">pp. {concept.page}</span>
          </div>
        )}
      </div>
    </div>
  );
}
